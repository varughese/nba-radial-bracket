const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require("fs");
const util = require('util');  
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const TEAM_INFO = require("./team-info");

async function scrape(url, year) {
	const CACHE_PATH = `./cache/${year}.html`;
	const cached = fs.existsSync(CACHE_PATH);
	let html;
	if(cached) {
		html = await readFile(CACHE_PATH);
	} else {
		html = await request(url);
		writeFile(CACHE_PATH, html);
	}
	return cheerio.load(html);
}

function getScore(str) {
	return str.trim().replace(/\(|\)/g, '').split("-").map(Number);
}

function parse($) {
	const $rows = getRows($);
	const series = [];
	let currentSeries = {};
	for(let i=0; i<$rows.length; i++) {
		const $row = $rows[i];
		if($row.hasClass("thead")) continue;
		const hasSeriesData = $row.hasClass("toggleable");
		const hasSeriesTitle = !hasSeriesData;
		if(hasSeriesTitle) {
			const $tds = $row.children();
			const round = $($tds[0]).text();
			const teams = $($tds[1]);
			const firstTeam = teams.find("a").eq(0).text();
			const secondTeam = teams.find("a").eq(1).text();
			const info = teams.contents().get(1).data;
			const score = getScore(teams.contents().get(3).data);
			currentSeries = {
				winning: firstTeam,
				winningPoints: score[0],
				losing: secondTeam,
				losingPoints: score[1],
				round
			}
		} else {
			series.push(currentSeries);
		}
	}
	return series;
}

function getRows($) {
	return $("#all_playoffs > tbody > tr").toArray().map($);
}

function transform(series) {
	transformRounds(series);
	series.sort((a, b) => b.round - a.round);
	const tree = convertToTree(series);
	// console.log(series);
	console.log(JSON.stringify(tree));
}


function convertToTree(series) {
	series = padSeriesWithFillerGames(series);
	const root = { children: [] };
	const TOTAL_GAMES = 15;
	const teamGameMap = {};
	series.forEach((match, i) => {
		if(i == 0) return;
		teamGameMap[match.winning] = teamGameMap[match.winning] || [];
		teamGameMap[match.winning].push(i);
	});
	let tree = convertToTreeRecursive(series[0]);
	function convertToTreeRecursive(match) {
		let node = { children: [] };
		if(match.round == 0) {
			node = {
				children: [
					{ name: match.winning, points: match.winningPoints },
					{ name: match.losing, points: match.losingPoints }
				]
			}
		} else {
			const topTeamNextMatch = teamGameMap[match.winning].shift();
			const bottomTeamNextMatch = teamGameMap[match.losing].shift();
			node.children[0] = convertToTreeRecursive(series[topTeamNextMatch]);
			node.children[1] = convertToTreeRecursive(series[bottomTeamNextMatch]);
			node.children[0].points = match.winningPoints;
			node.children[1].points = match.losingPoints;
			if(match.conference === "BOTH") {
				// EAST goes on top so it is on right side
				if(node.children[0].conference === "WEST") {
					const temp = node.children[0];
					node.children[0] = node.children[1];
					node.children[1] = temp;
				}
			}
		}
		Object.assign(node, {name: match.winning, conference: match.conference });
		return node;
	}
	
	return tree;
}



function padSeriesWithFillerGames(series) {
	const TOTAL_GAMES = 15;
	const topad = TOTAL_GAMES - series.length;
	const filler = new Array(topad).fill({ winning: "" });
	
	series = filler.concat(series);
	return series;
}

function transformRounds(series) {
	const rounds = ["FIRST ROUND", "SEMIFINALS", "CONFERENCE FINALS", "FINALS"];
	series = series.map(match => {
		const roundInfo = match.round;
		let roundRank = -1;
		for(let r=0; r<rounds.length; r++) {
			if(roundInfo.toUpperCase().indexOf(rounds[r]) > -1) {
				roundRank = r;
				break;
			}
		}
		match.round = roundRank;
		let conference = "BOTH"; 
		if(rounds[roundRank] !== "FINALS") {
			conference = TEAM_INFO[match.winning].conference;
		}
		match.conference = conference;
		return match;
	});

	return series;
}

async function getPlayoffData(year) {
	const url = `https://www.basketball-reference.com/playoffs/NBA_${year}.html`;
	const $ = await scrape(url, year);
	const data = parse($);
	transform(data);
}

getPlayoffData(2017);
// transform();