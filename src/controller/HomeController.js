const { response } = require("express");
const Home = require("./models/home");

class HomeController {
  // GET /
  index(req, res) {
    Home.counting(null, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.render("home", { num: response });
    });
  }
}

module.exports = new HomeController();
