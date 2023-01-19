let express = require("express");
const { BugModel } = require("../Models/bug.model");

let bug = express.Router();

bug.get("/", async (req, res) => {
  let query = req.query;
  if (query) {
    let bugs = await BugModel.find(query);
    await res.send(bugs);
  } else {
    let bugs = await BugModel.find();
    await res.send(bugs);
  }
});

bug.post("/create", async (req, res) => {
  let payload = req.body;yy
  let new_todo = new BugModel(payload);
  await new_todo.save();
  res.send("Posted Succesfully !!");
});

bug.patch("/update/:userID", async (req, res) => {
  let userID = req.body.userID;
  let todoID = req.params.userID;
  let payload = req.body;
  let bug = await BugModel.findOne({ _id: todoID });
  if (userID == bug.userID) {
    await BugModel.findByIdAndUpdate({ _id: todoID }, payload);
    res.send("Posted Succesfully !!");
  } else {
    res.send("Postng Error !!");
  }
});

bug.delete("/delete/:userID", async (req, res) => {
  let todoID = req.params.userID;
  await BugModel.findByIdAndDelete({ _id: todoID });
  res.send("bug Deleted Succesfully !!");
});

module.exports = bug;
