const express = require("express");
const volleyball = require("volleyball");
const app = express();
const path = require("path");


app.use(volleyball);
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("hello world from server");
})

module.exports = app;
