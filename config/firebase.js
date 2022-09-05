var admin = require("firebase-admin");
var serviceAccount = require("./../assets/temp-action.json");
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_URL
});

module.exports = {
    admin: admin
}