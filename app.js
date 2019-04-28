function trans(x, y) {
	return 'translate('+x+','+y+')';
}

function toDegrees(radians) {
	return radians * 180 / Math.PI;
}

function rotate(radians) {
	return `rotate(${toDegrees(radians)})`;
}

function transformToD3Tree(teams) {
	const obj = {
		"name": "A1",
		"children": [
		  {
			"name": "B1",
			"children": [
				{
					"name": "C1",
					"children": [
						{ "name": "D1", "children": [
							{ "name": "E1"},
							{ "name": "E2"}
						] },
						{ "name": "D2", "children": [
							{ "name": "E1"},
							{ "name": "E2"}
						] }
					]
				},
				{
					"name": "C1",
					"children": [
						{ "name": "D1", "children": [
							{ "name": "E1"},
							{ "name": "E2"}
						] },
						{ "name": "D2", "children": [
							{ "name": "E1"},
							{ "name": "E2"}
						] }
					]
				},
			]
		  },
		  {
			"name": "B2",
			"children": [
				{
					"name": "C1",
					"children": [
						{ "name": "D1", "children": [
							{ "name": "E1"},
							{ "name": "E2"}
						] },
						{ "name": "D2", "children": [
							{ "name": "E1"},
							{ "name": "E2"}
						] }
					]
				},
				{
					"name": "C1",
					"children": [
						{ "name": "D1", "children": [
							{ "name": "E1"},
							{ "name": "E2"}
						] },
						{ "name": "D2", "children": [
							{ "name": "E1"},
							{ "name": "E2"}
						] }
					]
				},
			]
		  }
		]
	  };
	return d3.hierarchy(obj)
}

class RadialBracket {
	constructor(teams) {
		// Convert our team data into a hierachy understandable by d3
		this.rootNode = transformToD3Tree(teams);
		this.STYLE = {
			RADIUS: 350,
			DOM_ID: '#bracket'
		};
	}

	build() {
		this.buildParitionLayout();
		this.appendSvg();
		this.addArcs();
		this.addText();
	}

	buildParitionLayout() {
		const rootNode = this.rootNode;

		// Make only the "leaves" of the tree have a value of 1.
		// this makes it so the bracket is even
		// took some experimentation to figure this out
		rootNode.sum(d => (d.children && d.children.length > 1) ? 0 : 1);
		const { RADIUS } = this.STYLE;
		
		this.partition = d3.partition()
			.size([2 * Math.PI, RADIUS]);
	
		this.partition(rootNode);
	}

	getArcGenerator() {
		// d3 arc is a tool to create the semi-circle things
		// called arcs
		return d3.arc()
			.startAngle(d => d.x0)
			.endAngle(d => d.x1)
			.innerRadius(d => d.y0)
			.outerRadius(d => d.y1);
	}

	appendSvg() {
		const { RADIUS, DOM_ID } = this.STYLE;
		this.svg = d3.select(DOM_ID)
			.append('svg')
			  .attr('width', RADIUS*2)
			  .attr('height', RADIUS*2)
			.append('g')
			  .attr("id", "center")
			  .attr('transform', trans(RADIUS,RADIUS));
	}

	addArcs() {
		const arcGenerator = this.getArcGenerator();
		const { rootNode } = this;

		d3.select('svg g').selectAll('path')
			.data(rootNode.descendants())
			.enter()
			.append('path')
			.attr('d', arcGenerator)
			.attr('class', d => {
				// You can figure out which "row" based on the value. Since it 
				// is a tree, you can use log base 2 of how many children it has
				// to figure out what level of the tree it is
				const colorRow = Math.log2(d.value) % 2 == 0;
				const color = colorRow ? 'light-gray' : 'dark-gray';
				return color + ' round-arc';
			})
	}

	addText() {
		const { svg, rootNode } = this;

		svg.append("g")
			.attr("pointer-events", "none")
			.attr("text-anchor", "middle")
			.selectAll("text")
			.data(rootNode.descendants())
			.enter().append("text")
			.attr("transform", function(d) {
				// This took some noodling out
				// First you rotate it, then you can adjust its y
				// You think in polar coordinates
				// then you rotate it again
				const rotation = toDegrees((d.x0 + d.x1) / 2) - 90;
				const postTextRotation = (0 <= rotation && rotation <= 180) ? 270 : 80;
				const y = (d.y0 + d.y1) / 2;
				return `rotate(${rotation}) translate(${y},0) rotate(${postTextRotation})`;
			})
			.attr("dy", "0.35em")
			.text(d => d.data.name)
			.attr('class', 'team-name');
	}
}


const bracket = new RadialBracket();
bracket.build();