const mongoose = require("mongoose");

let connection = mongoose.connect("mongodb+srv://abhiupadhyay:abhimasai@cluster0.bcxzxhh.mongodb.net/note?retryWrites=true&w=majority");

module.exports = { connection };
