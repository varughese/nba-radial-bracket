const functions = require('firebase-functions');
const admin = require('firebase-admin');
const getPlayoffData = require("./scraper/scraper");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const currentYear = new Date().getFullYear();
admin.initializeApp();

// Need blaze tier to make this work

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.getPlayoffData = functions.https.onRequest(async (req, res) => {
	// Grab the text parameter.
	const tree = await getPlayoffData(currentYear);
	console.log(tree);
	// Push the new message into the Realtime Database using the Firebase Admin SDK.
	const snapshot = await admin.database().ref('/years').child(currentYear).set(tree);
	// Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
	res.json(tree);
});
