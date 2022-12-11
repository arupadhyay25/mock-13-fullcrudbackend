let mongoose = require("mongoose");

let noteSchema = mongoose.Schema({
  title: String,
  note: String,
  category: [],
  auther: String,
  userID: String,
});

let NotesModel = mongoose.model("full_crud_notes", noteSchema);

module.exports = { NotesModel };
