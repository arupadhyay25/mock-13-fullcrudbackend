let express = require("express");
const { TodoModel } = require("../Models/todo.model");

let todo = express.Router();

todo.get("/", async (req, res) => {
  let query = req.query;
  if (query) {
    let todos = await TodoModel.find(query);
    await res.send(todos);
  } else {
    let todos = await TodoModel.find();
    await res.send(todos);
  }
});

todo.post("/create", async (req, res) => {
  let payload = req.body;
  let new_todo = new TodoModel(payload);
  await new_todo.save();
  res.send("Posted Succesfully !!");
});

todo.patch("/update/:userID", async (req, res) => {
  let userID = req.body.userID;
  let todoID = req.params.userID;
  let payload = req.body;
  let todo = await TodoModel.findOne({ _id: todoID });
  if (userID == todo.userID) {
    await TodoModel.findByIdAndUpdate({ _id: todoID }, payload);
    res.send("Posted Succesfully !!");
  } else {
    res.send("Postng Error !!");
  }
});

todo.delete("/delete/:userID", async (req, res) => {
  let todoID = req.params.userID;
  await TodoModel.findByIdAndDelete({ _id: todoID });
  res.send("Todo Deleted Succesfully !!");
});

module.exports = todo;
