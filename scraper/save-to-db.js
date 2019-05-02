require('dotenv').config();

const firebase = require("firebase-admin");
const serviceAccount = require("./secret-key.js");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://nba-radial-bracket.firebaseio.com"
});

const db = firebase.database();

module.exports = {
  saveToDb: function upload(data, year) {
    console.log("Saving", year, " to database");
    return db.ref('years').child(year).set(data);
  },
  closeDb: function() {
    return firebase.app().delete();
  }
};