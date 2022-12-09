const express = require("express");
const axios = require("axios");

const PORT = 3001;

const app = express();

app.listen(PORT, () => {
  console.log("Server started on port ", PORT, "!");
});

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
});
