const express = require("express");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const route = require("./routes");

app.use(express.urlencoded());
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.use(methodOverride("_method"));

// Template engine -- Handlebar
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

//------------IP => localhost:...--------------------------
app.listen(PORT, () => {
  console.log("Server started on port ", PORT, "!");
});

//------------------Routing----------------------------------
route(app);
