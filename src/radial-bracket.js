import * as d3 from 'd3';
import './style.css';
import Trophy from './assets/trophy.png';

function trans(x, y) {
	return 'translate('+x+','+y+')';
}

function toDegrees(radians) {
	return (radians * 180) / Math.PI;
}

export default class RadialBracket {
	constructor(teams, radius=300, id='#bracket', TEAM_INFO) {
		// Convert our team data into a hierachy understandable by d3
		this.rootNode = d3.hierarchy(teams);
		this.TEAM_INFO = TEAM_INFO;
		this.STYLE = {
			RADIUS: radius,
			DOM_ID: id,
			DIAMOND_WIDTH: 3.3 * radius/100,
			SPACE_BETWEEN_DOTS: 3.2*(radius/100),
			DOT_RADIUS: radius/90,
			DOTS_DISTANCE: 12,
			TEXT_OFFSET: 25
		};
		
	}

	config(config) {
		this.STYLE = Object.assign(this.STYLE, config.style);
		if(config.TEAM_INFO) this.TEAM_INFO = config.TEAM_INFO;
		if(config.teams) this.rootNode = d3.hierarchy(config.teams);
		return this;
	}

	getTeamInfo(d) {
		const name = d.data.name;
		if(name && this.TEAM_INFO[name])
			return this.TEAM_INFO[name];
		else
			return { abbreviation: name };
	}

	erase() {
		const { DOM_ID } = this.STYLE;
		d3.select(DOM_ID).selectAll('*').remove();
	}

	render() {
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
		// d3 arc is a tool to create the rounded semi-circle things
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
				if(this.getTeamInfo(d).color1) return 'round-arc';
				// You can figure out which "row" based on the value. Since it 
				// is a tree, you can use log base 2 of how many children it has
				// to figure out what level of the tree it is
				const colorRow = Math.log2(d.value) % 2 == 0;
				const color = colorRow ? 'light-gray' : 'dark-gray';
				return color + ' round-arc';
			})
			.attr("fill", d => this.getTeamInfo(d).color1)
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
			.text(d => this.getTeamInfo(d).abbreviation)
			.attr("fill", d => this.getTeamInfo(d).color2);
	}

	// Add the counters. Had to pull out some geometry skills
	// to make this look good
	addGamesWonDots() {
		const { svg, rootNode } = this;
		const { DOT_RADIUS, SPACE_BETWEEN_DOTS, DOTS_DISTANCE } = this.STYLE;
		const init_offset = Math.PI/40;
		const offset_list = [-1.5, -.5, .5, 1.5];
		svg.append("g").selectAll('g')
			.data(rootNode.descendants().slice(1))
			.enter()
			.append('g')
			.selectAll('circle')
			.data(d => [d,d,d,d])
			.enter()
			.append("circle")
			.attr("class", "game-counter-dot")
			.attr("r", DOT_RADIUS)
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
			.style("opacity", (d, i) => {
				const points = d.data.points || 0;
				return (i+1 <= points) ? 1 : 0.3;
			})
	}

	addGameDiamonds() {
		const { svg, rootNode } = this;
		const { DIAMOND_WIDTH } = this.STYLE;
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
		const innerRadius = rootNode.y1;
		const innerDiameter = 2*innerRadius;
		const imgHeight = innerDiameter-25;
		const ratioOfImage = (256/470);
		const imgWidth = ratioOfImage * imgHeight;
		const winner = svg.append('g').attr("id", "trophys")
		const winnerExists = rootNode.data.name;

		if(!winnerExists) {
			winner.append("circle")
			.attr("class", "light-gray")
			.attr("r", rootNode.y1-1)
		}
		
		winner.append('image')
			.attr('xlink:href', Trophy)
			.attr('href', Trophy)
			.attr("height", imgHeight)
			.attr("width", imgWidth)
			.attr("transform", trans(-imgWidth/2,-imgHeight/2))

		if(winnerExists) {
			const diamondBg = d3.color(this.getTeamInfo(rootNode).color1);
			diamondBg.opacity = 0.5;
			winner.append("rect")
				.attr("width", innerRadius)
				.attr("height", innerRadius)
				.attr("fill", diamondBg)
				.attr("class", "winner-diamond")
				.attr("transform", d => `rotate(45) translate(-${innerRadius/2}, -${innerRadius/2})`)
			winner.append("text")
				.text(this.getTeamInfo(rootNode).abbreviation)
				.attr("text-anchor", "middle")
				.attr("dy", "0.35em")
				.attr("fill", d => this.getTeamInfo(rootNode).color2)
				.attr("class", "team-name");
		}
	}
}