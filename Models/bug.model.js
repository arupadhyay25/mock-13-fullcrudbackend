let mongoose = require("mongoose");

let bugSchema = mongoose.Schema({
  title: { type: String },
  status: { type: String },
  // userID: { type: String },
});

let BugModel = mongoose.model("bug_eval", bugSchema);

module.exports = { BugModel };
