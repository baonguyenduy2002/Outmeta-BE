const sql = require("../../config/db/index");

const Post = function (post) {
  this.post_id = post.post_id;
  this.post_datetime = post.post_datetime;
  this.post_content = post.post_content;
  this.post_media = post.post_media;
  this.comment_count = post.comment_count;
  this.react_count = post.react_count;
  this.writer_id = post.writer_id;
};

Post.getOne = (post_id, result) => {
  const query = `SELECT * FROM post WHERE post_id = '${post_id}'`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Post.getAll = (post_id, result) => {
  let query = "SELECT * FROM post";
  if (post_id) {
    query += ` WHERE post_id LIKE '%${post_id}'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Post.getAllSearch = (post_content, result) => {
  let query = "SELECT * FROM post";
  if (post_content) {
    query += ` WHERE post_content LIKE '%${post_content}%'`;
  }
  // console.log("alo: ", query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Post.create = (newPost, result) => {
  sql.query("INSERT INTO post SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Created post: ", { newPost });
    result(null, { newPost });
  });
};

Post.update = (post_id, newData, result) => {
  sql.query(
    `UPDATE post SET ? WHERE post_id = ${post_id}`,
    newData,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Updated post: ", post_id, " ", newData);
      result(null, res);
    }
  );
};

Post.delete = (post_id, result) => {
  sql.query(`DELETE FROM post WHERE post_id = "${post_id}"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Deleted post: ", post_id);
    result(null, res);
  });
};

module.exports = Post;
