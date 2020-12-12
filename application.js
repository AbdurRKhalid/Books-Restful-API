const express = require("express");
const morgan = require("morgan");

const application = express();

application.use(morgan("dev"));

module.exports = application;
