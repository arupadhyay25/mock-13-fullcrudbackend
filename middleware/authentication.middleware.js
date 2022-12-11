let jwt = require("jsonwebtoken");
const { models } = require("mongoose");

let authenticate = (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (token) {
    let decoded = jwt.verify(token, "shhhhh", (err, decoded) => {
      if (err) {
        res.send("something went wrong !!!");
      } else if (decoded) {
        let userID = decoded.userID;
        req.body.userID = userID;
        next();
      }
    });
  } else {
    res.send("Please Login !!!");
  }
};

module.exports = { authenticate };
