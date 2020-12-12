const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const booksRoutes = require("./API/Routes/Books");
const mongoose = require("mongoose");
const application = express();

application.use(morgan("dev"));
application.use(express.urlencoded({ extended: true }));
application.use(express.json());

mongoose.connect(
  "mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Defining the Structure of Headers and Things If An Empty Request Comes.
application.use(function handlingEmptyRequest(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT POST PATCH GET DELETE");
    res.status(200).json({});
  }
  next();
});

application.use("/books", booksRoutes);

module.exports = application;
