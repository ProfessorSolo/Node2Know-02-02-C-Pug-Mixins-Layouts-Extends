/*
 * Created Date: Saturday, February 8th 2026, 11:37:52 am
 * Author: Joshua Solomon (Professor Solo)
 * License: Node2Know Learner License 1.0 (Node2Know-LEARN-1.0)
 * Copyright (c) 2026 Joshua Solomon
 */

"use strict";

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// load our routers
const indexRouter = require("./routers/indexRouter");
const pageRouter = require("./routers/pageRouter");
const thingRouter = require("./routers/thingRouter");

// tell Express where to find our templates (views)
app.set("views", path.join(__dirname, "views"));
// set the view engine to pug
app.set("view engine", "pug");

// Morgan Logging Middleware
const logger = require("morgan");
// Using logger as middleware, with 3 different output templates
app.use(logger("dev")); // method, path, status, time

// Express.static middleware to make the public folder globally accessible
app.use(express.static("public"));

// index routes
app.use(indexRouter);

// page routes
app.use(pageRouter);

// thing routes
app.use("/things", thingRouter);

// catch any unmatched routes
// Note: this has been updated to use a regular expression to catch all unmatched routes (express 5.x)
app.all(/.*/, (req, res) => {
  res.status(404).send("File Not Found");
});

// start listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
