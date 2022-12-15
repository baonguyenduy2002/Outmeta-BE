const sql = require("../../config/db/index");
const Home = {};

Home.counting = (a, result) => {
  sql.query(
    `SELECT
    (SELECT COUNT(*) FROM outmeta.user) as userCount, 
    (SELECT COUNT(*) FROM outmeta.post) as postCount,
    (SELECT COUNT(*) FROM outmeta.group) as groupCount,
    (SELECT COUNT(*) FROM outmeta.topic) as topicCount`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

module.exports = Home;
