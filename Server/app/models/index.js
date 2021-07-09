const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.attendee = require("./AttendeeSignUp.model.js")(mongoose);
db.researchPay = require("./ResearchPay.model.js")(mongoose);
db.conference = require("./AddConference.model.js")(mongoose);



module.exports = db;