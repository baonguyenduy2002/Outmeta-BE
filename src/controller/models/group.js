const sql = require("../../config/db/index");

const Group = function (group) {
  this.group_id = group.group_id;
  this.group_name = group.group_name;
  this.group_description = group.group_description;
  this.member_count = group.member_count;
  this.manager_id = group.manager_id;
};

Group.getOne = (group_id, result) => {
  const query = `SELECT * FROM outmeta.group WHERE group_id = '${group_id}'`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Group.getAll = (group_id, result) => {
  let query = "SELECT * FROM outmeta.group";
  if (group_id) {
    query += ` WHERE group_id LIKE '%${group_id}'`;
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

Group.getAllSearch = (group_name, result) => {
  let query = "SELECT * FROM outmeta.group";
  if (group_name) {
    query += ` WHERE group_name LIKE '%${group_name}%'`;
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

Group.create = (newGroup, result) => {
  sql.query("INSERT INTO outmeta.group SET ?", newGroup, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Created group: ", { newGroup });
    result(null, { newGroup });
  });
};

Group.update = (group_id, newData, result) => {
  sql.query(
    `UPDATE outmeta.group SET ? WHERE group_id = ${group_id}`,
    newData,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Updated group: ", group_id, " ", newData);
      result(null, res);
    }
  );
};

Group.delete = (group_id, result) => {
  sql.query(
    `DELETE FROM outmeta.group WHERE group_id = "${group_id}"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Deleted group: ", group_id);
      result(null, res);
    }
  );
};

module.exports = Group;
