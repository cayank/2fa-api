const express = require("express");
let routes = require("./src/routes");
let app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ code: 200, status: "OK" });
});

routes.init(app);

module.exports = app;
