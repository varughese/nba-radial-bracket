const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require("fs");
const util = require('util');  
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

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
	series = [{"winning":"Golden State Warriors","winningPoints":4,"losing":"Cleveland Cavaliers","losingPoints":0,"round":"Finals"},{"winning":"Cleveland Cavaliers","winningPoints":4,"losing":"Boston Celtics","losingPoints":3,"round":"Eastern Conference Finals"},{"winning":"Golden State Warriors","winningPoints":4,"losing":"Houston Rockets","losingPoints":3,"round":"Western Conference Finals"},{"winning":"Boston Celtics","winningPoints":4,"losing":"Philadelphia 76ers","losingPoints":1,"round":"Eastern Conference Semifinals"},{"winning":"Cleveland Cavaliers","winningPoints":4,"losing":"Toronto Raptors","losingPoints":0,"round":"Eastern Conference Semifinals"},{"winning":"Golden State Warriors","winningPoints":4,"losing":"New Orleans Pelicans","losingPoints":1,"round":"Western Conference Semifinals"},{"winning":"Houston Rockets","winningPoints":4,"losing":"Utah Jazz","losingPoints":1,"round":"Western Conference Semifinals"},{"winning":"Boston Celtics","winningPoints":4,"losing":"Milwaukee Bucks","losingPoints":3,"round":"Eastern Conference First Round"},{"winning":"Cleveland Cavaliers","winningPoints":4,"losing":"Indiana Pacers","losingPoints":3,"round":"Eastern Conference First Round"},{"winning":"Philadelphia 76ers","winningPoints":4,"losing":"Miami Heat","losingPoints":1,"round":"Eastern Conference First Round"},{"winning":"Toronto Raptors","winningPoints":4,"losing":"Washington Wizards","losingPoints":2,"round":"Eastern Conference First Round"},{"winning":"Golden State Warriors","winningPoints":4,"losing":"San Antonio Spurs","losingPoints":1,"round":"Western Conference First Round"},{"winning":"Houston Rockets","winningPoints":4,"losing":"Minnesota Timberwolves","losingPoints":1,"round":"Western Conference First Round"},{"winning":"New Orleans Pelicans","winningPoints":4,"losing":"Portland Trail Blazers","losingPoints":0,"round":"Western Conference First Round"},{"winning":"Utah Jazz","winningPoints":4,"losing":"Oklahoma City Thunder","losingPoints":2,"round":"Western Conference First Round"}];
	transformRounds(series);
	console.log(series);
}

function transformRounds(series) {
	const rounds = ["FIRST ROUND", "SEMIFINALS", "CONFERENCE FINALS", "FINALS"];
	series = series.map(match => {
		const roundInfo = match.round;
		let roundRank = -1;
		for(let r=0; r<rounds.length; r++) {
			if(roundInfo.toUpperCase().indexOf(rounds[r]) > 0) {
				roundRank = r;
				break;
			}
		}
		match.round = roundRank;
		return match;
	});
	return series;
}

async function getPlayoffData(year) {
	const url = `https://www.basketball-reference.com/playoffs/NBA_${year}.html`;
	const $ = await scrape(url, year);
	const data = parse($);
}

// getPlayoffData(2018);
transform();