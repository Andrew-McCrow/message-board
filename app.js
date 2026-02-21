const express = require("express");
const path = require("path");

// dummy data
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// express app
const app = express();

// listen for requests
app.listen(8080);

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

// static files - middleware
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Home", messages });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/new", (req, res) => {
  res.render("form", { title: "Create a new message" });
});

app.post("/new", (req, res) => {
  const { text: messageText, username: messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
