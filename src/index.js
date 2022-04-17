import "./reset.css";
import "./style.css";
import TEAM_INFO from "../functions/scraper/team-info.json";
import RadialBracket from "./radial-bracket";
import NbaPlayoffsLogo from "./assets/nba-playoffs.svg";
import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCiu3kskMWwTWtK2lVTtjfaHiBxKaPRdd4",
    authDomain: "nba-radial-bracket.firebaseapp.com",
    databaseURL: "https://nba-radial-bracket.firebaseio.com",
    projectId: "nba-radial-bracket",
    storageBucket: "nba-radial-bracket.appspot.com",
    messagingSenderId: "1059082424636",
    appId: "1:1059082424636:web:0e62edc02b508ecc",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

document.getElementById("playoffs-logo").src = NbaPlayoffsLogo;

const didPlayoffsStart = new Date().getMonth() >= 3;
const currentYear = new Date().getFullYear() - (didPlayoffsStart ? 0 : 1);
const MILLISECONDS_IN_HOUR = 3600000;
const RECHECK_TIME = 1 * MILLISECONDS_IN_HOUR;

const bracket = new RadialBracket({}, 350, "#bracket", TEAM_INFO);
function loadBracketForYear(year) {
    const cachedTree = localStorage.getItem(year);
    const lastFetchedTime = Number(localStorage.getItem("last_fetched"));
    const timeSinceFetch = new Date().getTime() - lastFetchedTime;
    const yearElapsedCheck =
        year !== currentYear ||
        (year === currentYear && timeSinceFetch < RECHECK_TIME);
    const shouldGetFromCache =
        cachedTree && cachedTree !== "null" && yearElapsedCheck;
    if (shouldGetFromCache) {
        const teams = JSON.parse(cachedTree);
        bracket.config({ teams }).render();
    } else {
        db.ref("years")
            .child(year)
            .once("value")
            .then((snapshot) => {
                const teams = snapshot.val();
                if (!teams) return;
                localStorage.setItem(year, JSON.stringify(teams));
                localStorage.setItem("last_fetched", new Date().getTime());
                bracket.config({ teams }).render();
            });
    }
}

loadBracketForYear(currentYear);

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
