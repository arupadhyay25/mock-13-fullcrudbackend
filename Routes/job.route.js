let express = require("express");
const { JobModel } = require("../Models/job.model");

let job = express.Router();

job.get("/", async (req, res) => {
  let query = req.query;
  if (query) {
    let jobs = await JobModel.find(query);
    await res.send(jobs);
  } else {
    let jobs = await JobModel.find();
    await res.send(jobs);
  }
});

job.post("/create", async (req, res) => {
  let payload = req.body;
  let new_todo = new JobModel(payload);
  await new_todo.save();
  res.send("Posted Succesfully !!");
});

job.patch("/update/:userID", async (req, res) => {
  let userID = req.body.userID;
  let todoID = req.params.userID;
  let payload = req.body;
  let job = await JobModel.findOne({ _id: todoID });
  if (userID == job.userID) {
    await JobModel.findByIdAndUpdate({ _id: todoID }, payload);
    res.send("Posted Succesfully !!");
  } else {
    res.send("Postng Error !!");
  }
});

job.delete("/delete/:userID", async (req, res) => {
  let todoID = req.params.userID;
  await JobModel.findByIdAndDelete({ _id: todoID });
  res.send("job Deleted Succesfully !!");
});

module.exports = job;
