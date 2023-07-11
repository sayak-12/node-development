const express = require("express");
const path = require("path");

const app = express();


//register ejs view engine
app.set("view engine", "ejs");
app.set("views", "viewejs");


//server listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//middlewares
app.use((req, res, next)=>{
  console.log("This is the middleware");
  next();
})
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "./viewejs/index.ejs"));
  const ti = [
    {name:"Sayak raha",comment:"Hello, node"},
    {name:"A. Tiwari",comment:"Hello, web developers"},
    {name:"V. Kohli",comment:"Amazing App"}
  ];
  res.render('index', {ti});
});

app.get("/about", (req, res) => {
  // res.sendFile(path.join(__dirname, "./viewejs/about.ejs"));
  res.render("about");
});

app.get("/contact", (req, res) => {
  // res.sendFile(path.join(__dirname, "./viewejs/contact.ejs"));
  res.render('contact');
});

// Redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 error
app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "./viewejs/404.ejs"));
  res.status(404).render('404');
});
