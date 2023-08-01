const express = require("express");
const mongoose = require("mongoose");
const Blog = require('./models/blog.js')
const app = express();
var dotenv = require('dotenv');

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


//middlewares
// app.use((req, res, next)=>{
//   console.log("This is the middleware");
//   next();
// })
app.use(express.static("public"));

//routes

app.get("/add-review", (req, res)=>{
    res.render("add-review");
    
})
app.post("/add-review", (req, res)=>{
  const body = req.body;
  var newblog = new Blog({
    name: body.name,
    review: body.review
  }) ;

  
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
app.get("/reviews/:id", (req, res)=>{
  const id = req.params.id;
  Blog.findById(id).then(result=>{
    const ti = result;
    res.render("details", {ti});
  })
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
