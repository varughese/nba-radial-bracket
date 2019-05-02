import * as d3 from 'd3';
import './style.css';
import TEAM_INFO from './team-info.json';
import RadialBracket from './radial-bracket';
import NbaPlayoffsLogo from './assets/nba-playoffs.svg';

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
	return d3.hierarchy(obj);
}

// document.getElementById('play')

const teams = {
	"children": [
	  {
		"children": [
		  {
			"children": [
			  {
				"children": [
				  {
					"name": "Toronto Raptors",
					"points": 4
				  },
				  {
					"name": "Orlando Magic",
					"points": 1
				  }
				],
				"name": "Toronto Raptors",
				"conference": "EAST",
				"points": 1
			  },
			  {
				"children": [
				  {
					"name": "Philadelphia 76ers",
					"points": 4
				  },
				  {
					"name": "Brooklyn Nets",
					"points": 1
				  }
				],
				"name": "Philadelphia 76ers",
				"conference": "EAST",
				"points": 1
			  }
			]
		  },
		  {
			"children": [
			  {
				"children": [
				  {
					"name": "Milwaukee Bucks",
					"points": 4
				  },
				  {
					"name": "Detroit Pistons",
					"points": 0
				  }
				],
				"name": "Milwaukee Bucks",
				"conference": "EAST",
				"points": 0
			  },
			  {
				"children": [
				  {
					"name": "Boston Celtics",
					"points": 4
				  },
				  {
					"name": "Indiana Pacers",
					"points": 0
				  }
				],
				"name": "Boston Celtics",
				"conference": "EAST",
				"points": 1
			  }
			]
		  }
		]
	  },
	  {
		"children": [
		  {
			"children": [
			  {
				"children": [
				  {
					"name": "Denver Nuggets",
					"points": 4
				  },
				  {
					"name": "San Antonio Spurs",
					"points": 3
				  }
				],
				"name": "Denver Nuggets",
				"conference": "WEST",
				"points": 1
			  },
			  {
				"children": [
				  {
					"name": "Portland Trail Blazers",
					"points": 4
				  },
				  {
					"name": "Oklahoma City Thunder",
					"points": 1
				  }
				],
				"name": "Portland Trail Blazers",
				"conference": "WEST",
				"points": 0
			  }
			]
		  },
		  {
			"children": [
			  {
				"children": [
				  {
					"name": "Golden State Warriors",
					"points": 4
				  },
				  {
					"name": "Los Angeles Clippers",
					"points": 2
				  }
				],
				"name": "Golden State Warriors",
				"conference": "WEST",
				"points": 1
			  },
			  {
				"children": [
				  {
					"name": "Houston Rockets",
					"points": 4
				  },
				  {
					"name": "Utah Jazz",
					"points": 1
				  }
				],
				"name": "Houston Rockets",
				"conference": "WEST",
				"points": 0
			  }
			]
		  }
		]
	  }
	]
  };

document.getElementById('playoffs-logo').src = NbaPlayoffsLogo;

const bracket = new RadialBracket(teams, 350, '#bracket', TEAM_INFO);
bracket.render();