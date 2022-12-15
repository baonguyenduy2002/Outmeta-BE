const { response } = require("express");
const Group = require("./models/group");

class GroupController {
  // GET /group

  indexsearch(req, res) {
    Group.getAllSearch(req.body.search, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("group", { group: response });
    });
  }

  index(req, res) {
    Group.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("group", { group: response });
    });
  }

  add(req, res) {
    res.render("groupInsert");
  }

  store(req, res) {
    let data = req.body;
    data.member_count = 0;
    data.manager_id = "wmaccartney23567";
    Group.create(data, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    Group.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("group", { group: response });
    });
  }

  show(req, res) {
    Group.getOne(req.params.group_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("groupDetail", { group: response });
    });
  }

  updateView(req, res) {
    let newData;
    Group.getOne(req.params.group_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      newData = response;
      res.render("groupUpdate", { newData: newData });
    });
  }
  // Group.update(req.params.group_id, req.body, (error, response) => {
  //   res.render("groupUpdate", {});
  // });
  update(req, res) {
    let updateData = req.body;
    updateData = { updateData, follower_count: 0 };
    Group.update(req.params.group_id, req.body, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    Group.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("group", { group: response });
    });
  }

  remove(req, res) {
    Group.delete(req.params.group_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    Group.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("group", { group: response });
    });
  }
}

module.exports = new GroupController();
