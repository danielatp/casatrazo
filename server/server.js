const express = require("express");
const volleyball = require("volleyball");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const apiRouter = require('./api');
const authRouter = require('./auth')

app.use(volleyball);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "../public")));
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.use((err, req, res, next) => {
  console.error('There was a problem here')
  console.error(err)
  res.status(err.status || 500).send(err.message)
})

module.exports = app;
