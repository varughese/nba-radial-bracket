const getPlayoffData = require("./scraper");
const currentYear = new Date().getFullYear();
const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

function saveFile(tree, year) {
    const json = JSON.stringify(tree, null, 2);
    console.log("Writing JSON for", year);
    return writeFile(path.join(__dirname, "cache", year + ".json"), json);
}

function scrapeYearsStartingFrom(year) {
    if (year) year = Number(year);
    if (!year) year = currentYear;
    const years = [...Array(currentYear - year + 1).keys()].map(
        (i) => i + year
    );
    const promises = years.map(async (year) => {
        const tree = await getPlayoffData(year);
        console.log(tree);
        console.log("Got playoff data.");
        return saveFile(tree, year);
    });
    Promise.all(promises);
}

scrapeYearsStartingFrom(process.argv[2] || currentYear);
