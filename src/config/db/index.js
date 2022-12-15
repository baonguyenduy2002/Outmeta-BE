const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3300",
  password: "123456789",
  database: "outmeta",
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Connect to the database successfull !!!");
});

module.exports = connection;
