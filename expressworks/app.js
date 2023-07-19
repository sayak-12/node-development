const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Blog = require('../models/blog.js')
const app = express();
const db = "mongodb+srv://sayak:sayakraha@apibuild.gxwtxm3.mongodb.net/mydata?retryWrites=true&w=majority";
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


//middlewares
// app.use((req, res, next)=>{
//   console.log("This is the middleware");
//   next();
// })
app.use(express.static("public"));

//routes

app.get("/add-review", (req, res)=>{
    var newblog = new Blog({
      name: "Sayak Raha",
      review: "Lemme talk to ya!"
    });
    newblog.save()
    .then(result=>{res.send(result)})
    .catch(err=>{res.send(err)});
})
app.get("/all-blogs", (req, res)=>{
  Blog.find().then((result)=>{
    res.send(result);
  })
  .catch(err=>{res.send(err)});
})
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

// 404 error
app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "./viewejs/404.ejs"));
  res.status(404).render('404');
});
