require('dotenv').config();

const firebase = require("firebase-admin");

// You need to download a secret key file from your Firebase console
// and set the appropiate enviornment variables 
// and database URL below
const serviceAccount = require("./secret-key.js");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://nba-radial-bracket.firebaseio.com"
});

const db = firebase.database();

module.exports = {
  saveToDb: function upload({tree, year}) {
    console.log("Saving", year, " to database");
    return db.ref('years').child(year).set(tree);
  },
  closeDb: function() {
    return firebase.app().delete();
  }
};