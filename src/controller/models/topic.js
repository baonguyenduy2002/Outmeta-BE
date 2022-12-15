const sql = require("../../config/db/index");

const Topic = function (topic) {
  this.topic_id = topic.topic_id;
  this.topic_title = topic.topic_title;
  this.follower_count = topic.follower_count;
};

Topic.getOne = (topic_id, result) => {
  const query = `SELECT * FROM topic WHERE topic_id = '${topic_id}'`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Topic.getAll = (topic_id, result) => {
  let query = "SELECT * FROM topic";
  if (topic_id) {
    query += ` WHERE topic_id LIKE '%${topic_id}'`;
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

Topic.getAllSearch = (topic_title, result) => {
  let query = "SELECT * FROM topic";
  if (topic_title) {
    query += ` WHERE topic_title LIKE '%${topic_title}%'`;
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

Topic.create = (newTopic, result) => {
  sql.query("INSERT INTO topic SET ?", newTopic, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Created topic: ", { newTopic });
    result(null, { newTopic });
  });
};

Topic.update = (topic_id, newData, result) => {
  sql.query(
    `UPDATE topic SET ? WHERE topic_id = ${topic_id}`,
    newData,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Updated topic: ", topic_id, " ", newData);
      result(null, res);
    }
  );
};

Topic.delete = (topic_id, result) => {
  sql.query(`DELETE FROM topic WHERE topic_id = "${topic_id}"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Deleted topic: ", topic_id);
    result(null, res);
  });
};

module.exports = Topic;
