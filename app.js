function trans(x, y) {
	return 'translate('+x+','+y+')';
}

function toDegrees(radians) {
	return (radians * 180) / Math.PI;
}

function rotate(radians) {
	return `rotate(${toDegrees(radians)})`;
}

function transformToD3Tree(teams) {
	const obj = {
		"name": "PHI",
		"children": [
		  {
			"name": "MIL",
			"children": [
				{
					"name": "BOS",
					"children": [
						{ "name": "SPU", "children": [
							{ "name": "NUG"},
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
	constructor(teams, radius=350, id='#bracket') {
		// Convert our team data into a hierachy understandable by d3
		this.rootNode = transformToD3Tree(teams);
		this.STYLE = {
			RADIUS: radius,
			DOM_ID: id,
			GAME_COUNTER_RADIUS: radius/100
		};
		
	}

	setStyle(style) {
		// do this es6 way
		if(style.RADIUS)
			this.STYLE.RADIUS = style.RADIUS;
		return this;
	}

	erase() {
		const { DOM_ID } = this.STYLE;
		d3.select(DOM_ID).selectAll('*').remove();
	}

	build() {
		this.erase();
		this.buildParitionLayout();
		this.appendSvg();
		this.addArcs();
		this.addText();
		this.addGamesWonDots();
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
			  .attr('width', RADIUS*2+6)
			  .attr('height', RADIUS*2+6)
			.append('g')
			  .attr("id", "center")
			  .attr('transform', trans(RADIUS+3,RADIUS+3));
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
		const TEXT_OFFSET = 33;
		const arcGenerator = d3.arc()
			.startAngle(d => d.x0)
			.endAngle(d => d.x1)
			.innerRadius(d => d.y0+TEXT_OFFSET)
			.outerRadius(d => d.y0+TEXT_OFFSET);

		const teamNameArc = svg.append("g")
			.attr('id', 'team-names-arcs')
			.selectAll('g')
			.data(rootNode.descendants())
			.enter()
			.append('g')
		
		teamNameArc
			.append('defs')
			.append('path')
			.attr('d', arcGenerator)
			.attr('id', d => `${d.data.name}${d.height}${(Number(d.x0+d.x1)*1000).toFixed(0)}`);
		
		teamNameArc.append('text')
			.append('textPath')
			.attr("text-anchor", "middle")
			.attr("startOffset", "25%")
			.attr("class", "team-name")
			.style("font-weight", "bold")
			.style("font-size", this.STYLE.RADIUS/13+"px")
			.attr("xlink:href", d => `#${d.data.name}${d.height}${(Number(d.x0+d.x1)*1000).toFixed(0)}`)
			.text(d => d.data.name);
			

		// svg.append("g")
		// 	.attr("pointer-events", "none")
		// 	.attr("text-anchor", "middle")
		// 	.selectAll("text")
		// 	.data(rootNode.descendants())
		// 	.enter().append("text")
		// 	.attr("transform", function(d) {
		// 		// This took some noodling out
		// 		// First you rotate it, then you can adjust its y
		// 		// You think in polar coordinates
		// 		// then you rotate it again
		// 		const rotation = toDegrees((d.x0 + d.x1) / 2) - 90;
		// 		const postTextRotation = (0 <= rotation && rotation <= 180) ? 270 : 80;
		// 		const y = (d.y0 + d.y1) / 2;
		// 		return `rotate(${rotation}) translate(${y},0) rotate(${postTextRotation})`;
		// 	})
		// 	.attr("dy", "0.35em")
		// 	.text(d => d.data.name)
		// 	.attr('class', 'team-name');
	}
	addGamesWonDots() {
		const { svg, rootNode } = this;
		const { RADIUS, GAME_COUNTER_RADIUS } = this.STYLE;
		const init_offset = 4.5*0.0174533;
		const SPACE_BETWEEN_DOTS = 190.5 * init_offset;
		const arcGenerator = this.getArcGenerator();
		svg.append("g").selectAll('g')
			.data(rootNode.descendants())
			.enter()
			.append('g')
			.selectAll('circle')
			.data(d => {
				return [d,d,d,d]
			})
			.enter()
			.append("circle")
			.attr("r", GAME_COUNTER_RADIUS)
			.attr("transform", (d, i) => {
				// Lol had to do math to make the dots the same
				// distance away at each distance from the center
				const y = d.y0 + 5*GAME_COUNTER_RADIUS + 2;
				const rotation = toDegrees((d.x0 + d.x1)/2) - 90;
				
				let offset = init_offset + ((SPACE_BETWEEN_DOTS - (y*init_offset)))/y //rotation;
				console.log(toDegrees(init_offset + offset));
				offset *= i;
				return `rotate(${rotation}) rotate(${toDegrees(offset)}) translate(${y}, 0)`
			})
			.attr("fill", "#fff")
	}
}


const bracket = new RadialBracket({}, 350, '#bracket');
bracket.build();


const r1 = 159.5;
const r2 = 229.5;
const init_offset = Math.PI/4;//4.5*0.0174533;
const SPACE_BETWEEN_DOTS = 19.5 * init_offset;
const getOffset = rrr => {
	return ( SPACE_BETWEEN_DOTS - (rrr*init_offset)) / rrr;
}
console.log(getOffset(r2));
d3.select('svg g').append('circle').attr('r',3.5).attr('fill', 'red').attr('transform', `rotate(45) rotate(0) translate(${r1}, 0)`)
d3.select('svg g').append('circle').attr('r',3.5).attr('fill', 'red').attr('transform', `rotate(45) rotate(${toDegrees(init_offset + getOffset(r1))}) translate(${r1}, 0)`)
d3.select('svg g').append('circle').attr('r',3.5).attr('fill', 'red').attr('transform', `rotate(50) rotate(0) translate(${r2}, 0)`)
d3.select('svg g').append('circle').attr('r',3.5).attr('fill', 'red').attr('transform', `rotate(50) rotate(${toDegrees(init_offset + getOffset(r2))}) translate(${r2}, 0)`)
