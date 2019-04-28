function trans(x, y) {
	return 'translate('+x+','+y+')';
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
			RADIUS: 300,
			DOM_ID: '#bracket'
		};
	}

	build() {
		this.buildParitionLayout();
		this.appendSvg();
		this.addArcs();
		// this.addText();
	}

	buildParitionLayout() {
		const rootNode = this.rootNode;
		// Make only the "leaves" of the tree have nodes
		rootNode.sum(d => (d.children && d.children.length > 1) ? 0 : 1);
		const { RADIUS } = this.STYLE;
		
		this.partition = d3.partition()
			.size([2 * Math.PI, RADIUS]);
	
		this.partition(rootNode);
	}

	getArcGenerator() {
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
				// const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
				const y = (d.y0 + d.y1) / 2;
				// return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
				return trans(d.x1, d.y0);
			})
			.attr("dy", "0.35em")
			.text(d => d.data.name);
	}
}


const bracket = new RadialBracket();
bracket.build();