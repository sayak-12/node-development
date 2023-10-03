const Blog = require('../models/blog.js')
const blog_index = (req, res)=>{
    Blog.find().then((result)=>{
      res.send(result);
    })
    .catch(err=>{res.send(err)});
  }

const blog_create_get =(req, res)=>{
    res.render("add-review");
    
}
const blog_create_post = (req, res)=>{
    const body = req.body;
    var newblog = new Blog({
      name: body.name,
      review: body.review,
    }) ;
  
    
    newblog.save()
    .then(result=>{res.send(result)})
    .catch(err=>{res.send(err)});
    
  }
const single_blog_index =(req, res)=>{
    const id = req.params.id;
    Blog.findById(id).then(result=>{
      const ti = result;
      res.render("details", {ti});
    })
  }
  const blog_update_get =(req, res)=>{
    const id = req.params.id;
    Blog.findById(id).then(result=>{
      const ti = result;
      res.render("update", {ti});
    })
    
}
  const blog_update_post =(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    Blog.findByIdAndUpdate(id, {name: body.name, review: body.review}).then((err, result)=>{
      if (err) {
        console.log("Some error occured while updating", err);
      }
      console.log("record updated successfully");
      res.redirect("/");
    });
    
}
  const blog_delete =(req, res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then((result)=>{
      console.log("record deleted successfully");
      res.redirect("/");
    });
    
}
  module.exports = {blog_index,
blog_create_get,
blog_create_post,
single_blog_index,
blog_update_get,
blog_update_post,
blog_delete};