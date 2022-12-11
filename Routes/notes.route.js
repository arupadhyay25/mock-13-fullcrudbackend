let express = require("express");
const { NotesModel } = require("../Models/notes.model");

let notes = express.Router();

notes.get("/", async (req, res) => {
  res.send(await NotesModel.find());
});

notes.post("/create", async (req, res) => {
  let payload = req.body;
  let new_note = new NotesModel(payload);
  await new_note.save();
  res.send("posted");
});

notes.patch("/update/:noteID", async (req, res) => {
  let userID = req.body.userID;
  let payload = req.body;
  let noteID = req.params.noteID;
  let note = await NotesModel.findOne({ _id: noteID });
  if (userID == note.userID) {
    await NotesModel.findByIdAndUpdate({ _id: noteID }, payload);
    res.send("patched");
  } else {
    res.send("something is wrong");
  }
});

notes.delete("/delete/:noteID", async (req, res) => {
  let noteID = req.params.noteID;
  await NotesModel.findByIdAndDelete({ _id: noteID });
  res.send("Deleted");
});

notes.get("/private", async (req, res) => {
  //   let token = req.query.token;
  let token = req.headers.authorization?.split(" ")[1];
  let decoded = jwt.verify(token, "shhhhh", (err, decoded) => {
    if (err) {
      res.send("something went wrong !!!");
    } else if (decoded) {
      res.send("this is private data");
    }
  });
});

module.exports = notes;
