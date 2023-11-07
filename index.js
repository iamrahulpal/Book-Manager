const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("./util/db");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");


mongo.connect();
app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);
app.use("/", (req, res) =>
  res.send("Hi, welcome to 'Book Manager'.")
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
