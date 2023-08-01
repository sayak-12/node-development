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
      review: body.review
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
  module.exports = {blog_index,
blog_create_get,
blog_create_post,
single_blog_index};