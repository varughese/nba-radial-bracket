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
					],
					"value": 1
				},
				{
					"name": "C1",
					"children": [
					],
					"value": 1
				},
			]
		  },
		  {
			"name": "B2",
			"children": [
				{
					"name": "C1",
					"children": [
					],
					"value": 1
				},
				{
					"name": "C1",
					"children": [
					],
					"value": 1
				},
			]
		  }
		]
	  };
	return d3.hierarchy(obj)
}

function buildBracket(teams) {
	const STYLE = {
		radius: 200
	}

	const root = transformToD3Tree(teams);
	root.sum(function(d) {
		return d.children && d.children.length > 1 ? 0 : 1;
	});
	  

	const { radius } = STYLE;
	
	const partition = d3.partition()
		.size([2 * Math.PI, STYLE.radius]);

	partition(root);

	const arcGenerator = d3.arc()
		.startAngle(function(d) { return d.x0; })
		.endAngle(function(d) { return d.x1; })
		.innerRadius(function(d) { return d.y0; })
		.outerRadius(function(d) { return d.y1; });

	const svg = d3.select('#bracket')
		.append('svg')
		  .attr('width', radius*2)
		  .attr('height', radius*2)
		.append('g')
		  .attr("id", "center")
		  .attr('transform', trans(radius,radius));
	
	d3.select('svg g').selectAll('path')
		.data(root.descendants())
		.enter()
		.append('path')
		.attr('d', arcGenerator)
		.attr('class', 'arc')

	svg.append("g")
		.attr("pointer-events", "none")
		.attr("text-anchor", "middle")
	  .selectAll("text")
	  .data(root.descendants())
	  .enter().append("text")
		.attr("transform", function(d) {
		  const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
		  const y = (d.y0 + d.y1) / 2;
		  return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
		})
		.attr("dy", "0.35em")
		.text(d => d.data.name);
}

buildBracket();