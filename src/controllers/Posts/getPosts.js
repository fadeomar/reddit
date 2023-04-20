const { getPostsQuery } = require("../../database/quires");

const getPosts = (req, res, next) => {
  getPostsQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500).json("server error", { err });
    });
};

module.exports = getPosts;
