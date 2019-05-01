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
	let obj = {
		"name": "PHI",
		"children": [
		  {
			"name": "EAS",
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
			"name": "WES",
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
	obj = {"children":[{"children":[{"children":[{"children":[{"name":"Cleveland Cavaliers","points":4},{"name":"Indiana Pacers","points":3}],"name":"Cleveland Cavaliers","conference":"EAST","points":4},{"children":[{"name":"Toronto Raptors","points":4},{"name":"Washington Wizards","points":2}],"name":"Toronto Raptors","conference":"EAST","points":0}],"name":"Cleveland Cavaliers","conference":"EAST","points":4},{"children":[{"children":[{"name":"Boston Celtics","points":4},{"name":"Milwaukee Bucks","points":3}],"name":"Boston Celtics","conference":"EAST","points":4},{"children":[{"name":"Philadelphia 76ers","points":4},{"name":"Miami Heat","points":1}],"name":"Philadelphia 76ers","conference":"EAST","points":1}],"name":"Boston Celtics","conference":"EAST","points":3}],"name":"Cleveland Cavaliers","conference":"EAST","points":0},{"children":[{"children":[{"children":[{"name":"Golden State Warriors","points":4},{"name":"San Antonio Spurs","points":1}],"name":"Golden State Warriors","conference":"WEST","points":4},{"children":[{"name":"New Orleans Pelicans","points":4},{"name":"Portland Trail Blazers","points":0}],"name":"New Orleans Pelicans","conference":"WEST","points":1}],"name":"Golden State Warriors","conference":"WEST","points":4},{"children":[{"children":[{"name":"Houston Rockets","points":4},{"name":"Minnesota Timberwolves","points":1}],"name":"Houston Rockets","conference":"WEST","points":4},{"children":[{"name":"Utah Jazz","points":4},{"name":"Oklahoma City Thunder","points":2}],"name":"Utah Jazz","conference":"WEST","points":1}],"name":"Houston Rockets","conference":"WEST","points":3}],"name":"Golden State Warriors","conference":"WEST","points":4}],"name":"Golden State Warriors","conference":"BOTH"};
	return d3.hierarchy(obj);
}

const TEAM_INFO = {
	"Atlanta Hawks": {
		"teamId": 1610612737,
		"abbreviation": "ATL",
		"teamName": "Atlanta Hawks",
		"simpleName": "Hawks",
		"location": "Atlanta",
		"conference": "EAST"
	},
	"Boston Celtics": {
		"teamId": 1610612738,
		"abbreviation": "BOS",
		"teamName": "Boston Celtics",
		"simpleName": "Celtics",
		"location": "Boston",
		"conference": "EAST"
	},
	"Brooklyn Nets": {
		"teamId": 1610612751,
		"abbreviation": "BKN",
		"teamName": "Brooklyn Nets",
		"simpleName": "Nets",
		"location": "Brooklyn",
		"conference": "EAST"
	},
	"Charlotte Hornets": {
		"teamId": 1610612766,
		"abbreviation": "CHA",
		"teamName": "Charlotte Hornets",
		"simpleName": "Hornets",
		"location": "Charlotte",
		"conference": "EAST"
	},
	"Chicago Bulls": {
		"teamId": 1610612741,
		"abbreviation": "CHI",
		"teamName": "Chicago Bulls",
		"simpleName": "Bulls",
		"location": "Chicago",
		"conference": "EAST"
	},
	"Cleveland Cavaliers": {
		"teamId": 1610612739,
		"abbreviation": "CLE",
		"teamName": "Cleveland Cavaliers",
		"simpleName": "Cavaliers",
		"location": "Cleveland",
		"conference": "EAST"
	},
	"Dallas Mavericks": {
		"teamId": 1610612742,
		"abbreviation": "DAL",
		"teamName": "Dallas Mavericks",
		"simpleName": "Mavericks",
		"location": "Dallas",
		"conference": "WEST"
	},
	"Denver Nuggets": {
		"teamId": 1610612743,
		"abbreviation": "DEN",
		"teamName": "Denver Nuggets",
		"simpleName": "Nuggets",
		"location": "Denver",
		"conference": "WEST"
	},
	"Detroit Pistons": {
		"teamId": 1610612765,
		"abbreviation": "DET",
		"teamName": "Detroit Pistons",
		"simpleName": "Pistons",
		"location": "Detroit",
		"conference": "EAST"
	},
	"Golden State Warriors": {
		"teamId": 1610612744,
		"abbreviation": "GSW",
		"teamName": "Golden State Warriors",
		"simpleName": "Warriors",
		"location": "Golden State",
		"conference": "WEST"
	},
	"Houston Rockets": {
		"teamId": 1610612745,
		"abbreviation": "HOU",
		"teamName": "Houston Rockets",
		"simpleName": "Rockets",
		"location": "Houston",
		"conference": "WEST"
	},
	"Indiana Pacers": {
		"teamId": 1610612754,
		"abbreviation": "IND",
		"teamName": "Indiana Pacers",
		"simpleName": "Pacers",
		"location": "Indiana",
		"conference": "EAST"
	},
	"Los Angeles Clippers": {
		"teamId": 1610612746,
		"abbreviation": "LAC",
		"teamName": "Los Angeles Clippers",
		"simpleName": "Clippers",
		"location": "Los Angeles",
		"conference": "WEST"
	},
	"Los Angeles Lakers": {
		"teamId": 1610612747,
		"abbreviation": "LAL",
		"teamName": "Los Angeles Lakers",
		"simpleName": "Lakers",
		"location": "Los Angeles",
		"conference": "WEST"
	},
	"Memphis Grizzlies": {
		"teamId": 1610612763,
		"abbreviation": "MEM",
		"teamName": "Memphis Grizzlies",
		"simpleName": "Grizzlies",
		"location": "Memphis",
		"conference": "WEST"
	},
	"Miami Heat": {
		"teamId": 1610612748,
		"abbreviation": "MIA",
		"teamName": "Miami Heat",
		"simpleName": "Heat",
		"location": "Miami",
		"conference": "EAST"
	},
	"Milwaukee Bucks": {
		"teamId": 1610612749,
		"abbreviation": "MIL",
		"teamName": "Milwaukee Bucks",
		"simpleName": "Bucks",
		"location": "Milwaukee",
		"conference": "EAST"
	},
	"Minnesota Timberwolves": {
		"teamId": 1610612750,
		"abbreviation": "MIN",
		"teamName": "Minnesota Timberwolves",
		"simpleName": "Timberwolves",
		"location": "Minnesota",
		"conference": "WEST"
	},
	"New Orleans Pelicans": {
		"teamId": 1610612740,
		"abbreviation": "NOP",
		"teamName": "New Orleans Pelicans",
		"simpleName": "Pelicans",
		"location": "New Orleans",
		"conference": "WEST"
	},
	"New York Knicks": {
		"teamId": 1610612752,
		"abbreviation": "NYK",
		"teamName": "New York Knicks",
		"simpleName": "Knicks",
		"location": "New York",
		"conference": "EAST"
	},
	"Oklahoma City Thunder": {
		"teamId": 1610612760,
		"abbreviation": "OKC",
		"teamName": "Oklahoma City Thunder",
		"simpleName": "Thunder",
		"location": "Oklahoma City",
		"conference": "WEST"
	},
	"Orlando Magic": {
		"teamId": 1610612753,
		"abbreviation": "ORL",
		"teamName": "Orlando Magic",
		"simpleName": "Magic",
		"location": "Orlando",
		"conference": "EAST"
	},
	"Philadelphia 76ers": {
		"teamId": 1610612755,
		"abbreviation": "PHI",
		"teamName": "Philadelphia 76ers",
		"simpleName": "76ers",
		"location": "Philadelphia",
		"conference": "EAST"
	},
	"Phoenix Suns": {
		"teamId": 1610612756,
		"abbreviation": "PHX",
		"teamName": "Phoenix Suns",
		"simpleName": "Suns",
		"location": "Phoenix",
		"conference": "WEST"
	},
	"Portland Trail Blazers": {
		"teamId": 1610612757,
		"abbreviation": "POR",
		"teamName": "Portland Trail Blazers",
		"simpleName": "Trail Blazers",
		"location": "Portland",
		"conference": "WEST"
	},
	"Sacramento Kings": {
		"teamId": 1610612758,
		"abbreviation": "SAC",
		"teamName": "Sacramento Kings",
		"simpleName": "Kings",
		"location": "Sacramento",
		"conference": "WEST"
	},
	"San Antonio Spurs": {
		"teamId": 1610612759,
		"abbreviation": "SAS",
		"teamName": "San Antonio Spurs",
		"simpleName": "Spurs",
		"location": "San Antonio",
		"conference": "WEST"
	},
	"Toronto Raptors": {
		"teamId": 1610612761,
		"abbreviation": "TOR",
		"teamName": "Toronto Raptors",
		"simpleName": "Raptors",
		"location": "Toronto",
		"conference": "EAST"
	},
	"Utah Jazz": {
		"teamId": 1610612762,
		"abbreviation": "UTA",
		"teamName": "Utah Jazz",
		"simpleName": "Jazz",
		"location": "Utah",
		"conference": "WEST"
	},
	"Washington Wizards": {
		"teamId": 1610612764,
		"abbreviation": "WAS",
		"teamName": "Washington Wizards",
		"simpleName": "Wizards",
		"location": "Washington",
		"conference": "EAST"
	}
};

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
			.text(d => TEAM_INFO[d.data.name].abbreviation);
			

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