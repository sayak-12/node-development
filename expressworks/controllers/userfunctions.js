const User = require('../models/user.js');
const user_index = (req, res)=>{
    User.find().then((result)=>{
        var userarray = result;
        // res.send(userarray);
        res.render("users", {userarray});
    })
    .catch(err=>{res.send(err)});
  }

const user_create_get =(req, res)=>{
    res.render("signup");
    
}
const user_create_post = async (req, res)=>{
    const body = req.body;
  try {
    var user = await User.signup(body.name,body.email,body.pass);
    res.status(200).send(user);
  } catch (error) {
    res.send(error);
  }
  }
const single_user =(req, res)=>{
    const id = req.params.id;
    User.findById(id).then(result=>{
      const ti = result;
      res.render("details", {ti});
    })
  }
  module.exports = {user_index,
user_create_get,
user_create_post,
single_user};