const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("./util/db");
const dotenv = require("dotenv");
dotenv.config();

mongo.connect();
app.use(bodyParser.json());

app.use("/", (req, res) =>
  res.send("Hi, welcome to 'Book Manager'.")
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
