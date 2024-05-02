const getPlayoffData = require("./scraper/scraper");

const run = async () => {
    const currentYear = new Date().getFullYear();
    const tree = await getPlayoffData(currentYear);
    const jsonTree = JSON.stringify(tree);
    console.log(jsonTree);
};

run();
