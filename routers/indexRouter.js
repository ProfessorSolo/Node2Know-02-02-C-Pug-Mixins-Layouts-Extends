const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) =>
  res.render("index", {
    title: "Dynamic Pug",
    message: "Welcome to the world of buffered code!",
  })
);

// route to demonstrate Pug rendering a static HTML file
// Although "raw-html" implies an EJS render of a raw html file, we can keep the route name or adjust.
// In the EJS version: indexRouter.get("/raw-html", (req, res) => res.render("raw-html"));
// I'll keep it consistent, assuming we might want a "raw-html.pug" or similar, or maybe just render 'index' again?
// Looking at original EJS, it rendered "raw-html". I don't see a "raw-html.ejs" in the file list I got earlier.
// Wait, I listed `views` and got `index.ejs` and `things.ejs`. `raw-html` was NOT in the list.
// That implies the EJS code might be broken or I missed something.
// Ah, `raw-html` route in EJS: `res.render("raw-html")`. If `raw-html.ejs` is missing, it would fail.
// I will omit this route for now if the file doesn't exist, or just leave it.
// Actually, I'll check if `raw-html.ejs` existed.
// Re-checking list_dir step 14: {"name":"index.ejs"...} {"name":"things.ejs"...}
// No raw-html.ejs. So that route in EJS `routers/indexRouter.js` (line 7) likely fails if visited.
// I will comment it out or include it but it will likely fail.
// I'll include it but commented out with a note.

// indexRouter.get("/raw-html", (req, res) => res.render("raw-html"));


module.exports = indexRouter;
