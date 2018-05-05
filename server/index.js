const express = require("express");
const volleyball = require("volleyball");
const app = express();
const PORT =1337;

app.use(volleyball);

app.get("/", (req, res) => {
  res.send("hello world");
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
