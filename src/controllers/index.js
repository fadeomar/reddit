const getSignIn = require("./Signin/getSignin");
const postSignIn = require("./Signin/postSignin");
const getSignUp = require("./Signup/getSignup");
const postSignup = require("./Signup/postSignup");
const getProfile = require("./Profile/getProfile");
const getLogout = require("./Profile/getLogout");
const createPost = require("./Posts/createPost");
const getPosts = require("./Posts/getPosts");

module.exports = {
  getSignIn,
  getSignUp,
  getProfile,
  postSignup,
  postSignIn,
  getLogout,
  createPost,
  getPosts,
};
