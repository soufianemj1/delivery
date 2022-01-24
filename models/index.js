const dbConfig = require("../config/db.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.admin = require("./adminmodel.js")(mongoose);
db.manager = require("./managermodel.js")(mongoose);
db.driver = require("./drivermodel.js")(mongoose);
db.delivery = require("./deliverymodel.js")(mongoose);
db.prime = require("./primemodel.js")(mongoose);

module.exports = db;
