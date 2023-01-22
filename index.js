require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

let bot = {
  TOKEN: "5962099167:AAFDdHNKJf_COqCyJbIHQWhIS7qzzksCTdQ",
  CHATID: "-595035808",
};

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req.body.main);
  const Message = req.body.main;
  const API = `http://api.telegram.org/bot${bot.TOKEN}`;
  const URI = `/sendMessage?chat_id=${bot.CHATID}&text=${Message}`;
  const WEBHOOK = API + URI;

  fetch(WEBHOOK, {
    mode: "cors",
  }).then(() => res.send("success"));
});

app.listen(process.env.PORT || 5000, async () => {
  console.log("🚀 app running on port", process.env.PORT || 5000);
});
