const express = require("express");
const app = express();
const clockRoute = require('./src/controllers/clockController');

app.use('/rest/clock', clockRoute);

module.exports = app;