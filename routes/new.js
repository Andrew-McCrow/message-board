const { Router } = require("express");

const newRouter = Router();

newRouter.get("/new", (req, res) => {
  res.render("form", { title: "Create a new message" });
});

newRouter.post("/new", (req, res) => {
  const { text: messageText, username: messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});
module.exports = newRouter;
