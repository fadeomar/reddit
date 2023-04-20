const addUserQuery = require("./users/addUserQuery");
const getUserByEmailQuery = require("./users/getUserByEmailQuery");
const addPostQuery = require("./posts/create-post");
const getPostsQuery = require("./posts/get-posts");

module.exports = {
  addUserQuery,
  getUserByEmailQuery,
  addPostQuery,
  getPostsQuery,
};
