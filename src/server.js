const express = require("express");
const axios = require("axios");

const PORT = 3001;

const app = express();

//------------------Route----------------------------------
app.get("/api", (req, res) => {
  // res.render('api');
  res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
});

//------------IP => localhost:...--------------------------
app.listen(PORT, () => {
  console.log("Server started on port ", PORT, "!");
});
