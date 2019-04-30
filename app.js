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
							{ "name": "TOR"}
						] },
						{ "name": "GSW", "children": [
							{ "name": "BOS"},
							{ "name": "TOR"}
						] }
					]
				},
				{
					"name": "POR",
					"children": [
						{ "name": "ORL", "children": [
							{ "name": "PHI"},
							{ "name": "TOR"}
						] },
						{ "name": "GSW", "children": [
							{ "name": "BOS"},
							{ "name": "TOR"}
						] }
					]
				},
			]
		  },
		  {
			"name": "HOU",
			"children": [
				{
					"name": "POR",
					"children": [
						{ "name": "ORL", "children": [
							{ "name": "PHI"},
							{ "name": "TOR"}
						] },
						{ "name": "GSW", "children": [
							{ "name": "BOS"},
							{ "name": "TOR"}
						] }
					]
				},
				{
					"name": "POR",
					"children": [
						{ "name": "ORL", "children": [
							{ "name": "BOS"},
							{ "name": "TOR"}
						] },
						{ "name": "GSW", "children": [
							{ "name": "BOS"},
							{ "name": "TOR"}
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
	constructor(teams, radius=300, id='#bracket') {
		// Convert our team data into a hierachy understandable by d3
		this.rootNode = transformToD3Tree(teams);
		this.STYLE = {
			RADIUS: radius,
			DOM_ID: id,
			GAME_COUNTER_RADIUS: radius/100,
			SPACE_BETWEEN_DOTS: 3.2*(radius/100),
			DOTS_DISTANCE: 10,
			TEXT_OFFSET: 25
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
		this.addGameDiamonds();
		this.addWinner();
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
			//   .attr('width', RADIUS*2+6)
			//   .attr('height', RADIUS*2+6)
			  .attr('viewBox', `0 0 ${RADIUS*2+6} ${RADIUS*2+6}`)
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
		const { TEXT_OFFSET } = this.STYLE;
		const arcGenerator = d3.arc()
			.startAngle(d => d.x0)
			.endAngle(d => d.x1)
			.innerRadius(d => d.y0+TEXT_OFFSET)
			.outerRadius(d => d.y0+TEXT_OFFSET);

		const teamNameArc = svg.append("g")
			.attr('id', 'team-names-arcs')
			.selectAll('g')
			.data(rootNode.descendants().slice(1))
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

	// Add the counters. Had to pull out some geometry to make this look good
	addGamesWonDots() {
		const { svg, rootNode } = this;
		const { GAME_COUNTER_RADIUS, SPACE_BETWEEN_DOTS, DOTS_DISTANCE } = this.STYLE;
		const init_offset = Math.PI/40;
		const offset_list = [-1.5, -.5, .5, 1.5];
		svg.append("g").selectAll('g')
			.data(rootNode.descendants().slice(1))
			.enter()
			.append('g')
			.selectAll('circle')
			.data(d => {
				return [d,d,d,d]
			})
			.enter()
			.append("circle")
			.attr("class", "game-counter-dot")
			.attr("r", GAME_COUNTER_RADIUS)
			.attr("transform", (d, i) => {
				// Lol had to do math to make the dots the same
				// distance away at each distance from the center
				// Hard to explain this problem without a picture
				const y = d.y0 + DOTS_DISTANCE;
				const rotation = toDegrees((d.x0 + d.x1)/2) - 90;
				// fun fact, it took me 2 hours to find out because I forgot to add init_offset
				let offset = init_offset + ((SPACE_BETWEEN_DOTS - (y*init_offset)))/y //rotation;
				offset *= offset_list[i];
				return `rotate(${rotation}) rotate(${toDegrees(offset)}) translate(${y}, 0)`
			})
			.attr("fill", "#fff")
	}

	addGameDiamonds() {
		const { svg, rootNode } = this;
		const { GAME_COUNTER_RADIUS } = this.STYLE;
		const DIAMOND_WIDTH = GAME_COUNTER_RADIUS*3;
		const HALF_DIAMOND_WIDTH = DIAMOND_WIDTH/2;
		const winnerDiamonds = [{x0: 0, y0: 70, y1: 70}, {x0: Math.PI, y0: 70, y1: 70}];
		const diamondData = rootNode.descendants().filter((team, i) => {
			return i >= 4 && i % 2 == 0;
		}).concat(winnerDiamonds);
		const rects = svg.append("g")
	
		rects.selectAll('rect')
			.data(diamondData)
			.enter()
			.append("rect")
			.attr("width", DIAMOND_WIDTH)
			.attr("height", DIAMOND_WIDTH)
			.attr("transform", d => {
				const rotation = toDegrees(d.x0)-90;
				const y = ((d.y0 + d.y1) / 2) - HALF_DIAMOND_WIDTH;
				return `rotate(${rotation}) translate(0,${-HALF_DIAMOND_WIDTH}) translate(${y}, 0) rotate(45 ${HALF_DIAMOND_WIDTH} ${HALF_DIAMOND_WIDTH})`;
			})
			.attr("fill", "#fff")

	}

	addWinner() {
		const { svg, rootNode } = this;
		const innerDiameter = 2*rootNode.y1;
		const imgHeight = innerDiameter-25;
		const ratioOfImage = (256/470);
		const imgWidth = ratioOfImage * imgHeight;
		const winner = svg.append('g').attr("id", "trophys")
		
		winner.append("circle")
		.attr("class", "light-gray")
		.attr("r", rootNode.y1-1)
		
		winner.append('image')
			.attr('xlink:href', './trophy.png')
			.attr('href', './trophy.png')
			.attr("height", imgHeight)
			.attr("width", imgWidth)
			.attr("transform", trans(-imgWidth/2,-imgHeight/2))

		
	}
}


const bracket = new RadialBracket({}, 350, '#bracket');
bracket.build();