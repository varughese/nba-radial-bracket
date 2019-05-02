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

import teams from '../scraper/cache/2019.json';

document.getElementById('playoffs-logo').src = NbaPlayoffsLogo;

const bracket = new RadialBracket(teams, 350, '#bracket', TEAM_INFO);
bracket.render();