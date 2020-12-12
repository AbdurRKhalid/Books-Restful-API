const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const application = express();

application.use(morgan("dev"));
application.use(express.urlencoded({ extended: true }));
application.use(express.json());

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

module.exports = application;
