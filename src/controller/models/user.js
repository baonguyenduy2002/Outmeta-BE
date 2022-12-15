const sql = require("../../config/db/index");

const User = function (user) {
  this.user_id = user.user_id;
  this.password = user.password;
  this.description = user.description;
  this.name = user.name;
  this.address = user.address;
  this.dob = user.dob;
  this.phone_number = user.phone_number;
  this.email = user.email;
  this.follower_count = user.follower_count;
};

User.getOne = (user_id, result) => {
  const query = `SELECT * FROM user WHERE user_id = '${user_id}'`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

User.getAll = (user_id, result) => {
  let query = "SELECT * FROM user";
  if (user_id) {
    query += ` WHERE user_id LIKE '%${user_id}%'`;
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

User.create = (newUser, result) => {
  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Created user: ", { newUser });
    result(null, { newUser });
  });
};

User.update = (user_id, newData, result) => {
  sql.query(
    `UPDATE user SET ? WHERE user_id = ${user_id}`,
    newData,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Updated user: ", user_id, " ", newData);
      result(null, res);
    }
  );
};

User.delete = (user_id, result) => {
  sql.query(`DELETE FROM user WHERE user_id = "${user_id}"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Deleted user: ", user_id);
    result(null, res);
  });
};

User.follow = (userfollower, result) => {
  sql.query(`INSERT INTO user_follower SET ?`, userfollower, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Followed");
    result(null, { userfollower });
  });
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Created user: ", { newUser });
    result(null, { newUser });
  });
};

User.showfollowers = (user_id, result) => {
  sql.query(`CALL outmeta.get_follower("${user_id}")`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

User.showfollowing = (user_id, result) => {
  sql.query(`CALL outmeta.get_following("${user_id}")`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

User.showgroups = (user_id, result) => {
  sql.query(`CALL outmeta.view_group_user("${user_id}")`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

User.showtopics = (user_id, result) => {
  sql.query(`CALL outmeta.get_topics("${user_id}")`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

User.showposts = (user_id, result) => {
  sql.query(`CALL outmeta.view_post_user("${user_id}")`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = User;
