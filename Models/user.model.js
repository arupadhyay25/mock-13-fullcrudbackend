let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  age: Number,
});

let UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
