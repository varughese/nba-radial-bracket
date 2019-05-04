const getPlayoffData = require("./scraper");
const {saveToDb, closeDb} = require('./save-to-db');
const currentYear = new Date().getFullYear();

function scrapeYearsStartingFrom(year) {
	if(year) year = Number(year);
	if(!year) year = currentYear;
	const years = [...Array(currentYear-year+1).keys()].map(i => i+year);
	const promises = years.map(async year => {
		const tree = await getPlayoffData(year);
		return saveToDb({tree, year});
	});
	Promise.all(promises).then(closeDb);
}


scrapeYearsStartingFrom(process.argv[2]);