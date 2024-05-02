import "./reset.css";
import "./style.css";
import TEAM_INFO from "../functions/scraper/team-info.json";
import RadialBracket from "./radial-bracket";
import NbaPlayoffsLogo from "./assets/nba-playoffs.svg";

document.getElementById("playoffs-logo").src = NbaPlayoffsLogo;

const didPlayoffsStart = new Date().getMonth() >= 3;
const currentYear = new Date().getFullYear() - (didPlayoffsStart ? 0 : 1);
const MILLISECONDS_IN_HOUR = 3600000;
const RECHECK_TIME = 1 * MILLISECONDS_IN_HOUR;

const bracket = new RadialBracket({}, 350, "#bracket", TEAM_INFO);
async function loadBracketForYear(year) {
    const cachedTree = localStorage.getItem(year);
    const lastFetchedTime = Number(localStorage.getItem("last_fetched"));
    const timeSinceFetch = new Date().getTime() - lastFetchedTime;
    const yearElapsedCheck =
        year !== currentYear ||
        (year === currentYear && timeSinceFetch < RECHECK_TIME);
    const shouldGetFromCache =
        cachedTree &&
        cachedTree !== "null" &&
        cachedTree.length > 10 &&
        yearElapsedCheck;
    if (shouldGetFromCache) {
        const teams = JSON.parse(cachedTree);
        bracket.config({ teams }).render();
    } else {
        try {
            const response = await fetch(
                `https://raw.githubusercontent.com/varughese/nba-radial-bracket/master/functions/scraper/cache/${year}.json`
            );
            const teams = await response.json();
            if (!teams) return;
            localStorage.setItem(year, JSON.stringify(teams));
            localStorage.setItem("last_fetched", new Date().getTime());
            bracket.config({ teams }).render();
        } catch (e) {
            console.error(e);
        }
    }
}

let yearDisplayed = currentYear;
const $yearDisplayedTop = document.getElementById("year");
const $prevYearText = document.getElementById("prev-year-text");
const $nextYearText = document.getElementById("next-year-text");
const $prevBtn = document.getElementById("yearleft");
const $nextBtn = document.getElementById("yearright");

window.changeYear = function (change) {
    if (yearDisplayed + change < 1990 || yearDisplayed + change > currentYear)
        return;
    yearDisplayed += change;
    loadBracketForYear(yearDisplayed);
    $yearDisplayedTop.textContent = yearDisplayed;
    $prevYearText.textContent = yearDisplayed - 1;
    $nextYearText.textContent = yearDisplayed + 1;
    if (yearDisplayed === currentYear) {
        $nextBtn.classList.add("invisible");
    } else {
        $nextBtn.classList.remove("invisible");
    }
    if (yearDisplayed === 1990) {
        $prevBtn.classList.add("invisible");
    } else {
        $prevBtn.classList.remove("invisible");
    }
};

function initialize() {
    window.changeYear(0);
}

initialize();
