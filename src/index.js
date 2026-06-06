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

async function fetchTeamsForYear(year) {
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
        return JSON.parse(cachedTree);
    }
    const response = await fetch(
        `https://raw.githubusercontent.com/varughese/nba-radial-bracket/master/functions/scraper/cache/${year}.json`
    );
    const teams = await response.json();
    if (teams) {
        localStorage.setItem(year, JSON.stringify(teams));
        localStorage.setItem("last_fetched", new Date().getTime());
    }
    return teams;
}

async function loadBracketForYear(year) {
    try {
        const teams = await fetchTeamsForYear(year);
        if (!teams) return;
        bracket.config({ teams }).render();
    } catch (e) {
        console.error(e);
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

function setYearDisplayed(year) {
    yearDisplayed = year;
    loadBracketForYear(year);
    $yearDisplayedTop.textContent = year;
    $prevYearText.textContent = year - 1;
    $nextYearText.textContent = year + 1;
    if (year === currentYear) $nextBtn.classList.add("invisible");
    else $nextBtn.classList.remove("invisible");
    if (year === 1990) $prevBtn.classList.add("invisible");
    else $prevBtn.classList.remove("invisible");
}

let gridVisible = false;
let gridRendered = false;

window.toggleGridView = function () {
    if (gridVisible) {
        hideGridView();
    } else {
        showGridView();
    }
};

function getBracketLevels(root) {
    const levels = [];
    let current = root.children ? [...root.children] : [];
    while (current.length) {
        levels.push(current);
        const next = [];
        for (const node of current) {
            if (node.children) next.push(...node.children);
        }
        current = next;
    }
    return levels;
    // levels[0] = 2 finalists
    // levels[1] = 4 conf finalists
    // levels[2] = 8 conf semis participants
    // levels[3] = 16 first-round participants
}

function buildBracketChip(name, sizeClass) {
    const info = TEAM_INFO[name] || {};
    const bg = info.color1 || "#555";
    const fg = info.color2 || "#fff";
    const abbr = info.abbreviation || (name || "").substring(0, 3).toUpperCase();
    return `<span class="bracket-chip ${sizeClass}" style="background:${bg};color:${fg}" title="${name}">${abbr}</span>`;
}

function buildBracketSection(levels) {
    const sizes = ["chip-lg", "chip-md", "chip-sm", "chip-xs"];
    return levels.map((nodes, i) => {
        const half = nodes.length / 2;
        const chips = nodes.map((node, j) => {
            const divider = j === half ? `<span class="bracket-divider"></span>` : "";
            return divider + buildBracketChip(node.name, sizes[i] || "chip-xs");
        }).join("");
        return `<div class="bracket-row">${chips}</div>`;
    }).join("");
}

function buildChampionCard(year, teams) {
    const finalists = (teams && teams.children) || [];
    const champFinalist = finalists.find(c => (c.points || 0) >= 4);
    const loserFinalist = finalists.find(c => c !== champFinalist);
    const isComplete = !!champFinalist;
    const champName = isComplete ? champFinalist.name : (teams && teams.name);
    const champInfo = TEAM_INFO[champName] || {};
    const loserInfo = loserFinalist ? (TEAM_INFO[loserFinalist.name] || {}) : {};
    const color1 = champInfo.color1 || "#1a1a2e";
    const color2 = champInfo.color2 || "#ffffff";
    const abbrev = champInfo.abbreviation || champName || "?";
    const loserWins = loserFinalist ? (loserFinalist.points || 0) : 0;

    function buildDots(wins, total) {
        let html = "";
        for (let i = 0; i < total; i++) {
            const filled = i < wins;
            html += `<span class="series-dot${filled ? " series-dot--win" : ""}" style="background:${color2}"></span>`;
        }
        return `<div class="year-card-dots">${html}</div>`;
    }

    const levels = getBracketLevels(teams);
    const bracketSection = levels.length
        ? `<div class="year-card-bracket">${buildBracketSection(levels)}</div>`
        : "";

    if (isComplete) {
        const totalGames = 4 + loserWins;
        return `
            <div class="year-card-header" style="background:${color1}">
                <div class="year-card-year">${year}</div>
                <div class="year-card-abbrev" style="color:${color2}">${abbrev}</div>
                ${buildDots(4, totalGames)}
            </div>${bracketSection}`;
    }
    return `
        <div class="year-card-header" style="background:#1a1a2e">
            <div class="year-card-year">${year}</div>
            <div class="year-card-ongoing">Ongoing</div>
        </div>${bracketSection}`;
}

function showGridView() {
    gridVisible = true;
    document.getElementById("grid-view").classList.remove("hide");

    if (gridRendered) {
        document.querySelectorAll(".year-card").forEach(card => {
            card.classList.toggle("active-year", Number(card.dataset.year) === yearDisplayed);
        });
        return;
    }
    gridRendered = true;

    const yearsGrid = document.getElementById("years-grid");

    for (let year = currentYear; year >= 1990; year--) {
        const card = document.createElement("div");
        card.className = "year-card year-card--loading" + (year === yearDisplayed ? " active-year" : "");
        card.dataset.year = year;
        card.innerHTML = `
            <div class="year-card-header">
                <div class="year-card-year">${year}</div>
                <div class="year-card-skeleton"></div>
            </div>`;

        card.addEventListener("click", () => {
            hideGridView();
            setYearDisplayed(year);
        });

        yearsGrid.appendChild(card);

        fetchTeamsForYear(year).then(teams => {
            if (!teams) return;
            const finalists = teams.children || [];
            const champFinalist = finalists.find(c => (c.points || 0) >= 4);
            const color1 = (champFinalist && TEAM_INFO[champFinalist.name] && TEAM_INFO[champFinalist.name].color1) || null;
            if (color1) card.style.boxShadow = `0 4px 16px ${color1}55`;
            card.classList.remove("year-card--loading");
            card.innerHTML = buildChampionCard(year, teams);
        }).catch(() => {
            card.classList.remove("year-card--loading");
            card.innerHTML = `
                <div class="year-card-header">
                    <div class="year-card-year">${year}</div>
                    <div class="year-card-ongoing">—</div>
                </div>`;
        });
    }
}

function hideGridView() {
    gridVisible = false;
    document.getElementById("grid-view").classList.add("hide");
}

function initialize() {
    window.changeYear(0);
}

initialize();
