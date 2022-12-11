const mongoose = require("mongoose");
require("dotenv").config;

let connection = mongoose.connect(process.env.mongo_key);

module.exports = { connection };
