const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/contact.html"));
});

// Redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 error
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../views/404.html"));
});
