(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
		const SPACE_BETWEEN_DOTS = 19.5 * init_offset;
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
				const offsets = [0, 0, 10, 0];
				const rotation = (d.x0 + d.x1)/2 - (Math.PI/2);
				
				let offset = ((SPACE_BETWEEN_DOTS - (y*init_offset)))/y //rotation;
				console.log(y)
				offset *= i;
				return `rotate(${toDegrees(rotation+offset)}) translate(${y}, 0)`
			})
			.attr("fill", "#fff")
			.on("mouseenter", console.log)
	}
}


const bracket = new RadialBracket({}, 350, '#bracket');
bracket.build();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2J1ZG8vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIHRyYW5zKHgsIHkpIHtcblx0cmV0dXJuICd0cmFuc2xhdGUoJyt4KycsJyt5KycpJztcbn1cblxuZnVuY3Rpb24gdG9EZWdyZWVzKHJhZGlhbnMpIHtcblx0cmV0dXJuIChyYWRpYW5zICogMTgwKSAvIE1hdGguUEk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZShyYWRpYW5zKSB7XG5cdHJldHVybiBgcm90YXRlKCR7dG9EZWdyZWVzKHJhZGlhbnMpfSlgO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ub0QzVHJlZSh0ZWFtcykge1xuXHRjb25zdCBvYmogPSB7XG5cdFx0XCJuYW1lXCI6IFwiUEhJXCIsXG5cdFx0XCJjaGlsZHJlblwiOiBbXG5cdFx0ICB7XG5cdFx0XHRcIm5hbWVcIjogXCJNSUxcIixcblx0XHRcdFwiY2hpbGRyZW5cIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQk9TXCIsXG5cdFx0XHRcdFx0XCJjaGlsZHJlblwiOiBbXG5cdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIlNQVVwiLCBcImNoaWxkcmVuXCI6IFtcblx0XHRcdFx0XHRcdFx0eyBcIm5hbWVcIjogXCJOVUdcIn0sXG5cdFx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRTJcIn1cblx0XHRcdFx0XHRcdF0gfSxcblx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRDJcIiwgXCJjaGlsZHJlblwiOiBbXG5cdFx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRTFcIn0sXG5cdFx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRTJcIn1cblx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkMxXCIsXG5cdFx0XHRcdFx0XCJjaGlsZHJlblwiOiBbXG5cdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkQxXCIsIFwiY2hpbGRyZW5cIjogW1xuXHRcdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkUxXCJ9LFxuXHRcdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkUyXCJ9XG5cdFx0XHRcdFx0XHRdIH0sXG5cdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkQyXCIsIFwiY2hpbGRyZW5cIjogW1xuXHRcdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkUxXCJ9LFxuXHRcdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkUyXCJ9XG5cdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRdXG5cdFx0ICB9LFxuXHRcdCAge1xuXHRcdFx0XCJuYW1lXCI6IFwiQjJcIixcblx0XHRcdFwiY2hpbGRyZW5cIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQzFcIixcblx0XHRcdFx0XHRcImNoaWxkcmVuXCI6IFtcblx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRDFcIiwgXCJjaGlsZHJlblwiOiBbXG5cdFx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRTFcIn0sXG5cdFx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRTJcIn1cblx0XHRcdFx0XHRcdF0gfSxcblx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRDJcIiwgXCJjaGlsZHJlblwiOiBbXG5cdFx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRTFcIn0sXG5cdFx0XHRcdFx0XHRcdHsgXCJuYW1lXCI6IFwiRTJcIn1cblx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkMxXCIsXG5cdFx0XHRcdFx0XCJjaGlsZHJlblwiOiBbXG5cdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkQxXCIsIFwiY2hpbGRyZW5cIjogW1xuXHRcdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkUxXCJ9LFxuXHRcdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkUyXCJ9XG5cdFx0XHRcdFx0XHRdIH0sXG5cdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkQyXCIsIFwiY2hpbGRyZW5cIjogW1xuXHRcdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkUxXCJ9LFxuXHRcdFx0XHRcdFx0XHR7IFwibmFtZVwiOiBcIkUyXCJ9XG5cdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRdXG5cdFx0ICB9XG5cdFx0XVxuXHQgIH07XG5cdHJldHVybiBkMy5oaWVyYXJjaHkob2JqKVxufVxuXG5jbGFzcyBSYWRpYWxCcmFja2V0IHtcblx0Y29uc3RydWN0b3IodGVhbXMsIHJhZGl1cz0zNTAsIGlkPScjYnJhY2tldCcpIHtcblx0XHQvLyBDb252ZXJ0IG91ciB0ZWFtIGRhdGEgaW50byBhIGhpZXJhY2h5IHVuZGVyc3RhbmRhYmxlIGJ5IGQzXG5cdFx0dGhpcy5yb290Tm9kZSA9IHRyYW5zZm9ybVRvRDNUcmVlKHRlYW1zKTtcblx0XHR0aGlzLlNUWUxFID0ge1xuXHRcdFx0UkFESVVTOiByYWRpdXMsXG5cdFx0XHRET01fSUQ6IGlkLFxuXHRcdFx0R0FNRV9DT1VOVEVSX1JBRElVUzogcmFkaXVzLzEwMFxuXHRcdH07XG5cdFx0XG5cdH1cblxuXHRzZXRTdHlsZShzdHlsZSkge1xuXHRcdC8vIGRvIHRoaXMgZXM2IHdheVxuXHRcdGlmKHN0eWxlLlJBRElVUylcblx0XHRcdHRoaXMuU1RZTEUuUkFESVVTID0gc3R5bGUuUkFESVVTO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXJhc2UoKSB7XG5cdFx0Y29uc3QgeyBET01fSUQgfSA9IHRoaXMuU1RZTEU7XG5cdFx0ZDMuc2VsZWN0KERPTV9JRCkuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cdH1cblxuXHRidWlsZCgpIHtcblx0XHR0aGlzLmVyYXNlKCk7XG5cdFx0dGhpcy5idWlsZFBhcml0aW9uTGF5b3V0KCk7XG5cdFx0dGhpcy5hcHBlbmRTdmcoKTtcblx0XHR0aGlzLmFkZEFyY3MoKTtcblx0XHR0aGlzLmFkZFRleHQoKTtcblx0XHR0aGlzLmFkZEdhbWVzV29uRG90cygpO1xuXHR9XG5cblx0YnVpbGRQYXJpdGlvbkxheW91dCgpIHtcblx0XHRjb25zdCByb290Tm9kZSA9IHRoaXMucm9vdE5vZGU7XG5cblx0XHQvLyBNYWtlIG9ubHkgdGhlIFwibGVhdmVzXCIgb2YgdGhlIHRyZWUgaGF2ZSBhIHZhbHVlIG9mIDEuXG5cdFx0Ly8gdGhpcyBtYWtlcyBpdCBzbyB0aGUgYnJhY2tldCBpcyBldmVuXG5cdFx0Ly8gdG9vayBzb21lIGV4cGVyaW1lbnRhdGlvbiB0byBmaWd1cmUgdGhpcyBvdXRcblx0XHRyb290Tm9kZS5zdW0oZCA9PiAoZC5jaGlsZHJlbiAmJiBkLmNoaWxkcmVuLmxlbmd0aCA+IDEpID8gMCA6IDEpO1xuXHRcdGNvbnN0IHsgUkFESVVTIH0gPSB0aGlzLlNUWUxFO1xuXHRcdFxuXHRcdHRoaXMucGFydGl0aW9uID0gZDMucGFydGl0aW9uKClcblx0XHRcdC5zaXplKFsyICogTWF0aC5QSSwgUkFESVVTXSk7XG5cdFxuXHRcdHRoaXMucGFydGl0aW9uKHJvb3ROb2RlKTtcblx0fVxuXG5cdGdldEFyY0dlbmVyYXRvcigpIHtcblx0XHQvLyBkMyBhcmMgaXMgYSB0b29sIHRvIGNyZWF0ZSB0aGUgc2VtaS1jaXJjbGUgdGhpbmdzXG5cdFx0Ly8gY2FsbGVkIGFyY3Ncblx0XHRyZXR1cm4gZDMuYXJjKClcblx0XHRcdC5zdGFydEFuZ2xlKGQgPT4gZC54MClcblx0XHRcdC5lbmRBbmdsZShkID0+IGQueDEpXG5cdFx0XHQuaW5uZXJSYWRpdXMoZCA9PiBkLnkwKVxuXHRcdFx0Lm91dGVyUmFkaXVzKGQgPT4gZC55MSk7XG5cdH1cblxuXHRhcHBlbmRTdmcoKSB7XG5cdFx0Y29uc3QgeyBSQURJVVMsIERPTV9JRCB9ID0gdGhpcy5TVFlMRTtcblx0XHR0aGlzLnN2ZyA9IGQzLnNlbGVjdChET01fSUQpXG5cdFx0XHQuYXBwZW5kKCdzdmcnKVxuXHRcdFx0ICAuYXR0cignd2lkdGgnLCBSQURJVVMqMis2KVxuXHRcdFx0ICAuYXR0cignaGVpZ2h0JywgUkFESVVTKjIrNilcblx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0ICAuYXR0cihcImlkXCIsIFwiY2VudGVyXCIpXG5cdFx0XHQgIC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFucyhSQURJVVMrMyxSQURJVVMrMykpO1xuXHR9XG5cblx0YWRkQXJjcygpIHtcblx0XHRjb25zdCBhcmNHZW5lcmF0b3IgPSB0aGlzLmdldEFyY0dlbmVyYXRvcigpO1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXM7XG5cblx0XHRkMy5zZWxlY3QoJ3N2ZyBnJykuc2VsZWN0QWxsKCdwYXRoJylcblx0XHRcdC5kYXRhKHJvb3ROb2RlLmRlc2NlbmRhbnRzKCkpXG5cdFx0XHQuZW50ZXIoKVxuXHRcdFx0LmFwcGVuZCgncGF0aCcpXG5cdFx0XHQuYXR0cignZCcsIGFyY0dlbmVyYXRvcilcblx0XHRcdC5hdHRyKCdjbGFzcycsIGQgPT4ge1xuXHRcdFx0XHQvLyBZb3UgY2FuIGZpZ3VyZSBvdXQgd2hpY2ggXCJyb3dcIiBiYXNlZCBvbiB0aGUgdmFsdWUuIFNpbmNlIGl0IFxuXHRcdFx0XHQvLyBpcyBhIHRyZWUsIHlvdSBjYW4gdXNlIGxvZyBiYXNlIDIgb2YgaG93IG1hbnkgY2hpbGRyZW4gaXQgaGFzXG5cdFx0XHRcdC8vIHRvIGZpZ3VyZSBvdXQgd2hhdCBsZXZlbCBvZiB0aGUgdHJlZSBpdCBpc1xuXHRcdFx0XHRjb25zdCBjb2xvclJvdyA9IE1hdGgubG9nMihkLnZhbHVlKSAlIDIgPT0gMDtcblx0XHRcdFx0Y29uc3QgY29sb3IgPSBjb2xvclJvdyA/ICdsaWdodC1ncmF5JyA6ICdkYXJrLWdyYXknO1xuXHRcdFx0XHRyZXR1cm4gY29sb3IgKyAnIHJvdW5kLWFyYyc7XG5cdFx0XHR9KVxuXHR9XG5cblx0YWRkVGV4dCgpIHtcblx0XHRjb25zdCB7IHN2Zywgcm9vdE5vZGUgfSA9IHRoaXM7XG5cdFx0Y29uc3QgVEVYVF9PRkZTRVQgPSAzMztcblx0XHRjb25zdCBhcmNHZW5lcmF0b3IgPSBkMy5hcmMoKVxuXHRcdFx0LnN0YXJ0QW5nbGUoZCA9PiBkLngwKVxuXHRcdFx0LmVuZEFuZ2xlKGQgPT4gZC54MSlcblx0XHRcdC5pbm5lclJhZGl1cyhkID0+IGQueTArVEVYVF9PRkZTRVQpXG5cdFx0XHQub3V0ZXJSYWRpdXMoZCA9PiBkLnkwK1RFWFRfT0ZGU0VUKTtcblxuXHRcdGNvbnN0IHRlYW1OYW1lQXJjID0gc3ZnLmFwcGVuZChcImdcIilcblx0XHRcdC5hdHRyKCdpZCcsICd0ZWFtLW5hbWVzLWFyY3MnKVxuXHRcdFx0LnNlbGVjdEFsbCgnZycpXG5cdFx0XHQuZGF0YShyb290Tm9kZS5kZXNjZW5kYW50cygpKVxuXHRcdFx0LmVudGVyKClcblx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFxuXHRcdHRlYW1OYW1lQXJjXG5cdFx0XHQuYXBwZW5kKCdkZWZzJylcblx0XHRcdC5hcHBlbmQoJ3BhdGgnKVxuXHRcdFx0LmF0dHIoJ2QnLCBhcmNHZW5lcmF0b3IpXG5cdFx0XHQuYXR0cignaWQnLCBkID0+IGAke2QuZGF0YS5uYW1lfSR7ZC5oZWlnaHR9JHsoTnVtYmVyKGQueDArZC54MSkqMTAwMCkudG9GaXhlZCgwKX1gKTtcblx0XHRcblx0XHR0ZWFtTmFtZUFyYy5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LmFwcGVuZCgndGV4dFBhdGgnKVxuXHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuXHRcdFx0LmF0dHIoXCJzdGFydE9mZnNldFwiLCBcIjI1JVwiKVxuXHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInRlYW0tbmFtZVwiKVxuXHRcdFx0LnN0eWxlKFwiZm9udC13ZWlnaHRcIiwgXCJib2xkXCIpXG5cdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgdGhpcy5TVFlMRS5SQURJVVMvMTMrXCJweFwiKVxuXHRcdFx0LmF0dHIoXCJ4bGluazpocmVmXCIsIGQgPT4gYCMke2QuZGF0YS5uYW1lfSR7ZC5oZWlnaHR9JHsoTnVtYmVyKGQueDArZC54MSkqMTAwMCkudG9GaXhlZCgwKX1gKVxuXHRcdFx0LnRleHQoZCA9PiBkLmRhdGEubmFtZSk7XG5cdFx0XHRcblxuXHRcdC8vIHN2Zy5hcHBlbmQoXCJnXCIpXG5cdFx0Ly8gXHQuYXR0cihcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKVxuXHRcdC8vIFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuXHRcdC8vIFx0LnNlbGVjdEFsbChcInRleHRcIilcblx0XHQvLyBcdC5kYXRhKHJvb3ROb2RlLmRlc2NlbmRhbnRzKCkpXG5cdFx0Ly8gXHQuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0Ly8gXHRcdC8vIFRoaXMgdG9vayBzb21lIG5vb2RsaW5nIG91dFxuXHRcdC8vIFx0XHQvLyBGaXJzdCB5b3Ugcm90YXRlIGl0LCB0aGVuIHlvdSBjYW4gYWRqdXN0IGl0cyB5XG5cdFx0Ly8gXHRcdC8vIFlvdSB0aGluayBpbiBwb2xhciBjb29yZGluYXRlc1xuXHRcdC8vIFx0XHQvLyB0aGVuIHlvdSByb3RhdGUgaXQgYWdhaW5cblx0XHQvLyBcdFx0Y29uc3Qgcm90YXRpb24gPSB0b0RlZ3JlZXMoKGQueDAgKyBkLngxKSAvIDIpIC0gOTA7XG5cdFx0Ly8gXHRcdGNvbnN0IHBvc3RUZXh0Um90YXRpb24gPSAoMCA8PSByb3RhdGlvbiAmJiByb3RhdGlvbiA8PSAxODApID8gMjcwIDogODA7XG5cdFx0Ly8gXHRcdGNvbnN0IHkgPSAoZC55MCArIGQueTEpIC8gMjtcblx0XHQvLyBcdFx0cmV0dXJuIGByb3RhdGUoJHtyb3RhdGlvbn0pIHRyYW5zbGF0ZSgke3l9LDApIHJvdGF0ZSgke3Bvc3RUZXh0Um90YXRpb259KWA7XG5cdFx0Ly8gXHR9KVxuXHRcdC8vIFx0LmF0dHIoXCJkeVwiLCBcIjAuMzVlbVwiKVxuXHRcdC8vIFx0LnRleHQoZCA9PiBkLmRhdGEubmFtZSlcblx0XHQvLyBcdC5hdHRyKCdjbGFzcycsICd0ZWFtLW5hbWUnKTtcblx0fVxuXHRhZGRHYW1lc1dvbkRvdHMoKSB7XG5cdFx0Y29uc3QgeyBzdmcsIHJvb3ROb2RlIH0gPSB0aGlzO1xuXHRcdGNvbnN0IHsgUkFESVVTLCBHQU1FX0NPVU5URVJfUkFESVVTIH0gPSB0aGlzLlNUWUxFO1xuXHRcdGNvbnN0IGluaXRfb2Zmc2V0ID0gNC41KjAuMDE3NDUzMztcblx0XHRjb25zdCBTUEFDRV9CRVRXRUVOX0RPVFMgPSAxOS41ICogaW5pdF9vZmZzZXQ7XG5cdFx0Y29uc3QgYXJjR2VuZXJhdG9yID0gdGhpcy5nZXRBcmNHZW5lcmF0b3IoKTtcblx0XHRzdmcuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoJ2cnKVxuXHRcdFx0LmRhdGEocm9vdE5vZGUuZGVzY2VuZGFudHMoKSlcblx0XHRcdC5lbnRlcigpXG5cdFx0XHQuYXBwZW5kKCdnJylcblx0XHRcdC5zZWxlY3RBbGwoJ2NpcmNsZScpXG5cdFx0XHQuZGF0YShkID0+IHtcblx0XHRcdFx0cmV0dXJuIFtkLGQsZCxkXVxuXHRcdFx0fSlcblx0XHRcdC5lbnRlcigpXG5cdFx0XHQuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHQuYXR0cihcInJcIiwgR0FNRV9DT1VOVEVSX1JBRElVUylcblx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIChkLCBpKSA9PiB7XG5cdFx0XHRcdC8vIExvbCBoYWQgdG8gZG8gbWF0aCB0byBtYWtlIHRoZSBkb3RzIHRoZSBzYW1lXG5cdFx0XHRcdC8vIGRpc3RhbmNlIGF3YXkgYXQgZWFjaCBkaXN0YW5jZSBmcm9tIHRoZSBjZW50ZXJcblx0XHRcdFx0Y29uc3QgeSA9IGQueTAgKyA1KkdBTUVfQ09VTlRFUl9SQURJVVMgKyAyO1xuXHRcdFx0XHRjb25zdCBvZmZzZXRzID0gWzAsIDAsIDEwLCAwXTtcblx0XHRcdFx0Y29uc3Qgcm90YXRpb24gPSAoZC54MCArIGQueDEpLzIgLSAoTWF0aC5QSS8yKTtcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBvZmZzZXQgPSAoKFNQQUNFX0JFVFdFRU5fRE9UUyAtICh5KmluaXRfb2Zmc2V0KSkpL3kgLy9yb3RhdGlvbjtcblx0XHRcdFx0Y29uc29sZS5sb2coeSlcblx0XHRcdFx0b2Zmc2V0ICo9IGk7XG5cdFx0XHRcdHJldHVybiBgcm90YXRlKCR7dG9EZWdyZWVzKHJvdGF0aW9uK29mZnNldCl9KSB0cmFuc2xhdGUoJHt5fSwgMClgXG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKVxuXHRcdFx0Lm9uKFwibW91c2VlbnRlclwiLCBjb25zb2xlLmxvZylcblx0fVxufVxuXG5cbmNvbnN0IGJyYWNrZXQgPSBuZXcgUmFkaWFsQnJhY2tldCh7fSwgMzUwLCAnI2JyYWNrZXQnKTtcbmJyYWNrZXQuYnVpbGQoKTsiXX0=
