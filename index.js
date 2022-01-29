const express = require("express");
const cors = require("cors");
const dialogues = require("./dialogues.json");

const app = express();

app.get("/", (req, res) => {
  res.json(dialogues);
});

app.get("/random", (req, res) => {
  const dialogue = dialogues[Math.floor(Math.random() * dialogues.length)];

  res.json(dialogue);
});

app.get("/year", (req, res) => {
  console.log(req.query.year);

  var dialogue = dialogues.filter((item) => {
    return item.year == req.query.year;
  });

  res.json(dialogue);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
