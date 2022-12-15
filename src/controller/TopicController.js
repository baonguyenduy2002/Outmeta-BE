const { response } = require("express");
const Topic = require("./models/topic");

class TopicController {
  // GET /topic

  indexsearch(req, res) {
    Topic.getAllSearch(req.body.search, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("topic", { topic: response });
    });
  }

  index(req, res) {
    Topic.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("topic", { topic: response });
    });
  }

  add(req, res) {
    res.render("topicInsert");
  }

  store(req, res) {
    let data = req.body;
    data.follower_count = 0;
    Topic.create(data, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    Topic.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("topic", { topic: response });
    });
  }

  show(req, res) {
    Topic.getOne(req.params.topic_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("topicDetail", { topic: response });
    });
  }

  showposts(req, res) {
    Topic.showposts(req.body.followid, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("topicPosts", { post: response[0] });
    });
  }

  updateView(req, res) {
    let newData;
    Topic.getOne(req.params.topic_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      newData = response;
      res.render("topicUpdate", { newData: newData });
    });
  }
  // Topic.update(req.params.topic_id, req.body, (error, response) => {
  //   res.render("topicUpdate", {});
  // });
  update(req, res) {
    let updateData = req.body;
    updateData = { updateData, follower_count: 0 };
    Topic.update(req.params.topic_id, req.body, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    Topic.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("topic", { topic: response });
    });
  }

  remove(req, res) {
    Topic.delete(req.params.topic_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    Topic.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("topic", { topic: response });
    });
  }
}

module.exports = new TopicController();
