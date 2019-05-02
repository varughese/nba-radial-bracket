import './style.css';
import TEAM_INFO from './team-info.json';
import RadialBracket from './radial-bracket';
import NbaPlayoffsLogo from './assets/nba-playoffs.svg';
import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCiu3kskMWwTWtK2lVTtjfaHiBxKaPRdd4",
	authDomain: "nba-radial-bracket.firebaseapp.com",
	databaseURL: "https://nba-radial-bracket.firebaseio.com",
	projectId: "nba-radial-bracket",
	storageBucket: "nba-radial-bracket.appspot.com",
	messagingSenderId: "1059082424636",
	appId: "1:1059082424636:web:0e62edc02b508ecc"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

document.getElementById('playoffs-logo').src = NbaPlayoffsLogo;

const currentYear = new Date().getFullYear();
const MILLISECONDS_IN_HOUR = 3600000;
const RECHECK_TIME = 1 *MILLISECONDS_IN_HOUR;

const bracket = new RadialBracket({}, 350, '#bracket', TEAM_INFO);
function loadBracketForYear(year) {
	const cachedTree = localStorage.getItem(year);
	const lastFetchedTime = Number(localStorage.getItem("last_fetched"));
	const timeSinceFetch = new Date().getTime() - lastFetchedTime;
	const shouldGetFromCache = cachedTree && year === currentYear && timeSinceFetch < RECHECK_TIME;
	if(shouldGetFromCache) {
		const teams = JSON.parse(cachedTree);
		bracket.config({teams});
		bracket.render();
	} else {
		db.ref("years").child(year).once('value').then(snapshot => {
			const teams = snapshot.val();
			localStorage.setItem(year, JSON.stringify(teams));
			localStorage.setItem("last_fetched", new Date().getTime());
			bracket.config({teams});
			bracket.render();
		})
	}
}

loadBracketForYear(currentYear);


