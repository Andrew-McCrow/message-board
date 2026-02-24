const express = require("express");
const path = require("path");

// routes
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

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

// routes
app.use("/", indexRouter);
app.use("/new", newRouter);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
