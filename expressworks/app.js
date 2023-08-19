const express = require("express");
const mongoose = require("mongoose");
var cookieParser = require('cookie-parser')
const Blog = require('./models/blog.js');
const User = require('./models/user.js');
const app = express();
var dotenv = require('dotenv');
var route = require('./models/Blogroutes.js');
const userRoute = require('./models/userRoutes.js');
const {userdata} = require("./middleware/authmiddleware.js");

dotenv.config();
const db = process.env.DATABASE_KEY;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>{console.log("Succesfully connected to MongoDB");
//server listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
})
.catch(err=>{console.log("Some error occured: \n", err);})
//register ejs view engine
app.set("view engine", "ejs");
app.set("views", "viewejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());


//middlewares
// app.use((req, res, next)=>{
//   console.log("This is the middleware");
//   next();
// })
app.use(express.static("public"));

//routes
app.get("*", userdata);
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "./viewejs/index.ejs"));
  Blog.find().then((result)=>{
    const ti = result;
    res.render("index", {ti});
  })
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

app.use(route);
app.use(userRoute);

// 404 error
app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "./viewejs/404.ejs"));
  res.status(404).render('404');
});
