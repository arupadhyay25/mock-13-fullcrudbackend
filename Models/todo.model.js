let mongoose = require("mongoose");

let todoSchema = mongoose.Schema({
  title: { type: String },
  status: { type: String },
  tag: { type: String },
  userID: { type: String },
});

let TodoModel = mongoose.model("todo_eval", todoSchema);

module.exports = { TodoModel };
