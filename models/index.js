const mongoose = require("mongoose");

const db = {};

db.mongoose = mongoose;
db.user = require("./user");
db.role = require("./role");
db.image = require("./image");
db.video = require("./video");

module.exports = db;