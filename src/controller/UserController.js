const { response } = require("express");
const User = require("./models/user");

class UserController {
  // GET /user
  index(req, res) {
    if (req.body) {
      User.getAll(req.body.search, (error, response) => {
        if (error) {
          console.log(error);
          return;
        }
        res.render("user", { user: response });
      });
      return;
    }
    User.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("user", { user: response });
    });
  }

  add(req, res) {
    res.render("userInsert");
  }

  store(req, res) {
    let data = req.body;
    data.follower_count = 0;
    User.create(data, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    User.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("user", { user: response });
    });
  }

  show(req, res) {
    User.getOne(req.params.user_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("userDetail", { user: response });
    });
  }

  showfollowers(req, res) {
    User.showfollowers(req.body.followid, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("userFollower", { user: response[0] });
    });
  }

  showfollowings(req, res) {
    User.showfollowing(req.body.followid, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("userFollower", { user: response[0] });
    });
  }

  showgroups(req, res) {
    User.showgroups(req.body.followid, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("userGroups", { group: response[0] });
    });
  }

  showposts(req, res) {
    User.showposts(req.body.followid, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("userPosts", { post: response[0] });
    });
  }

  showtopics(req, res) {
    User.showtopics(req.body.followid, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("userTopics", { topic: response[0] });
    });
  }

  updateView(req, res) {
    let newData;
    User.getOne(req.params.user_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      newData = response;
      res.render("userUpdate", { newData: newData });
    });
  }
  // User.update(req.params.user_id, req.body, (error, response) => {
  //   res.render("userUpdate", {});
  // });
  update(req, res) {
    let updateData = req.body;
    updateData = { updateData, follower_count: 0 };
    User.update(req.params.user_id, req.body, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    User.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("user", { user: response });
    });
  }

  remove(req, res) {
    User.delete(req.params.user_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    User.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("user", { user: response });
    });
  }

  follow(req, res) {
    let userfollow = req.body;
    User.follow(userfollow, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    User.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("user", { user: response });
    });
  }
}

module.exports = new UserController();
