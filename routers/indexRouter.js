const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) =>
  res.render("index", {
    title: "Dynamic Pug",
    message: "Welcome to the world of buffered code!",
  })
);

module.exports = indexRouter;
