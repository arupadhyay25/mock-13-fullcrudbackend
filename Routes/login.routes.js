let express = require("express");
const { UserModel } = require("../Models/user.model");
var jwt = require("jsonwebtoken");

let auth = express.Router();

auth.post("/signup", async (req, res) => {
  let payload = req.body;
  try {
    let user = new UserModel(payload);
    await user.save();
    res.send("Signup succesfully");
  } catch (error) {
    res.send("Something Went wrong while signing up , Please Again later !!!");
  }
});

auth.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.find({ email, password });
    if (user.length == 1) {
      let token = jwt.sign({ userID: user[0]._id }, "shhhhh");
      res.send({ msg: "Signin succesfully", token: token, Userdata: data });
    } else if (user.length == 0) {
      res.send("User Doesn't Exist ,Please Signup  !!!");
    }
  } catch (error) {
    res.send("User Doesn't Exist ,Please Signup first !!!");
  }
});

module.exports = auth;
