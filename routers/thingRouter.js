
const express = require("express");
const thingRouter = express.Router();

const things = [
  {
    id: 1,
    name: "Flux Capacitor",
    description: "Makes time travel possible. 1.21 Gigawatts required.",
    active: true,
  },
  {
    id: 2,
    name: "Sonic Screwdriver",
    description: "It doesn't do wood. Works on everything else.",
    active: false,
  },
  {
    id: 3,
    name: "Lightsaber",
    description: "An elegant weapon for a more civilized age.",
    active: true,
  },
];


thingRouter.get("/", (req, res) => {
  const activeThings = things.filter((t) => t.active);
  res.render("things", { things: activeThings });
});

thingRouter.get("/:thingId", (req, res) => {
  const thingId = parseInt(req.params.thingId);
  const thing = things.find((t) => t.id === thingId && t.active);

  if (!thing) {
    res.status(404).send("Thing not found");
    return;
  }

  res.render("thing", { thing });
});

module.exports = thingRouter;
