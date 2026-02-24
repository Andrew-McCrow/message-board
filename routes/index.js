const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Home", messages });
});

indexRouter.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

module.exports = indexRouter;
