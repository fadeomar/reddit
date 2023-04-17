const { join } = require("path");

const postSignup = (req, res, next) => {
  const data = req.body;
  console.log("ddddddddddddddddddddddddddd", data);
  res.json("sucess");
};

module.exports = postSignup;
