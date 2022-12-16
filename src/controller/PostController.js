const { response } = require("express");
const Post = require("./models/post");

class PostController {
  // GET /post

  indexsearch(req, res) {
    Post.getAllSearch(req.body.search, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("post", { post: response });
    });
  }

  index(req, res) {
    Post.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("post", { post: response });
    });
  }

  add(req, res) {
    res.render("postInsert");
  }

  store(req, res) {
    // let data = req.body;
    let data = {
      // post_id: req.body.post_id,
      post_content: req.body.post_content,
      post_media: req.body.post_media,
      post_datetime: req.body.post_datetime,
    };
    data.comment_count = 0;
    data.react_count = 0;
    data.writer_id = "wmaccartney23567";
    Post.create(data, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });

    Post.add_personalpost(
      { post_id: data.post_id, writer_id: data.writer_id },
      (error, response) => {
        if (error) {
          console.log(error);
          return;
        }
      }
    );

    data = req.body;

    if (data.group_id) {
      Post.add_grouppost(
        { post_id: data.post_id, group_id: data.group_id },
        (error, response) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );
    }

    if (data.topic_id) {
      Post.add_topicpost(
        { post_id: data.post_id, topic_id: data.topic_id },
        (error, response) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );
    }

    Post.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("post", { post: response });
    });
  }

  show(req, res) {
    Post.getOne(req.params.post_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("postDetail", { post: response });
    });
  }

  updateView(req, res) {
    let newData;
    Post.getOne(req.params.post_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      newData = response;
      res.render("postUpdate", { newData: newData });
    });
  }
  // Post.update(req.params.post_id, req.body, (error, response) => {
  //   res.render("postUpdate", {});
  // });
  update(req, res) {
    let updateData = req.body;
    updateData = { updateData, follower_count: 0 };
    Post.update(req.params.post_id, req.body, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    Post.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("post", { post: response });
    });
  }

  remove(req, res) {
    Post.delete(req.params.post_id, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
    });
    Post.getAll(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("post", { post: response });
    });
  }
}

module.exports = new PostController();
