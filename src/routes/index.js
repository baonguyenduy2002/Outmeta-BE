const homeRouter = require("./home");
const userRouter = require("./user");
const postRouter = require("./post");
const groupRouter = require("./group");
const topicRouter = require("./topic");

const route = (app) => {
  app.use("/topic", topicRouter);
  app.use("/group", groupRouter);
  app.use("/post", postRouter);
  app.use("/user", userRouter);
  app.use("/", homeRouter);
};

module.exports = route;
