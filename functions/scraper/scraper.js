const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require("fs");
const path = require("path");
const util = require('util');  
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const TEAM_INFO = require("./team-info.json");

const PULL_FROM_CACHE = false;
const currentYear = new Date().getFullYear();

async function scrape(url, year) {
	const CACHE_PATH = path.join(__dirname, "cache", `${year}.html`);
	const cached = PULL_FROM_CACHE || (year < currentYear ? fs.existsSync(CACHE_PATH) : false);
	let html;
	if(cached) {
		console.log("HTML found in cache for", year);
		html = await readFile(CACHE_PATH);
	} else {
		console.log("Making network request for", year);
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
	series.sort(sortMatches);
	return convertToTree(series);
}

function sortMatches(matchA, matchB) {
	const confOrder = { "EAST": 0, "WEST": 1, "BOTH": -1 }
	const aConf = confOrder[matchA.conference];
	const bConf = confOrder[matchB.conference];
	return matchB.round - matchA.round || aConf - bConf;
}

function convertToTree(series) {
	const { mostRecentGame, padded } = padSeriesWithFillerGames(series);;
	series = padded;
	const wonGames = {};
	series.forEach((match, i) => {
		if(i <= mostRecentGame || match.filler) return;
		wonGames[match.winning] = wonGames[match.winning] || [];
		wonGames[match.winning].push(i);
	});
	let tree = convertToTreeRecursive(series[0]);

	// this looks more complicated then it is
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
			let topTeamNextMatch, bottomTeamNextMatch;
			if (match.filler) {
				topTeamNextMatch = match.next[0];
				bottomTeamNextMatch = match.next[1];
			} else {
				topTeamNextMatch = wonGames[match.winning].shift();
				bottomTeamNextMatch = wonGames[match.losing].shift();	
			}
			node.children[0] = convertToTreeRecursive(series[topTeamNextMatch]);
			node.children[1] = convertToTreeRecursive(series[bottomTeamNextMatch]);
			if(match.filler) {
				node.children[0] = { children: node.children[0].children, points: 0 };
				node.children[1] = { children: node.children[1].children, points: 0 };
			} else {
				node.children[0].points = match.winningPoints;
				node.children[1].points = match.losingPoints;
			}
			
			// Probbaly not needed anymore, since the array is sorted:
			if(match.conference === "BOTH") {
				// EAST needs to be first child so it shows up as
				// on the right side in the d3 visualization
				if(node.children[0].conference === "WEST") {
					const temp = node.children[0];
					node.children[0] = node.children[1];
					node.children[1] = temp;
				}
			}
		}
		if(!match.filler) {
			Object.assign(node, {name: match.winning, conference: match.conference });
		}
		return node;
	}
	
	return tree;
}


function padSeriesWithFillerGames(series) {
	const TOTAL_GAMES = 15;
	const padlen = TOTAL_GAMES - series.length;
	const fillers = new Array(padlen).fill(1)
		.map((_m, i) => ({ next: [2*i + 1,  2*i + 2], filler: true }));
	const padded = fillers.concat(series);
	// TODO Need to check if someone actually won or not here
	const mostRecentGame = 2*(padlen-1)+2;
	return {
		padded,
		mostRecentGame
	};
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
			const teamInfo = TEAM_INFO[match.winning];
			if(!teamInfo) console.error("No team info for", match.winning);
			conference = teamInfo.conference;
		}
		match.conference = conference;
		return match;
	});

	return series;
}

function saveFile(tree, year) {
	if(process.env.SAVE_FILES) {
		const json =  JSON.stringify(tree, null, 2);
		console.log("Writing JSON for", year);
		return writeFile(path.join(__dirname, "cache", year+".json"), json);
	}
}

async function getPlayoffData(year) {
	const url = `https://www.basketball-reference.com/playoffs/NBA_${year}.html`;
	try {
		const $ = await scrape(url, year);
		const data = parse($);
		const tree = transform(data);
		saveFile(tree, year);
		return tree;
	} catch (e) {
		console.error(e);
	}
}

module.exports = getPlayoffData;
