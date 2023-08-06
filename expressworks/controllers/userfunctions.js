const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};
const user_index = (req, res) => {
  User.find()
    .then((result) => {
      var userarray = result;
      // res.send(userarray);
      res.render("users", { userarray });
    })
    .catch((err) => {
      res.send(err);
    });
};

const user_create_get = (req, res) => {
  res.render("signup");
};
const user_create_post = async (req, res) => {
  const body = req.body;
  try {
    var user = await User.signup(body.name, body.email, body.pass, body.cpass);
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const user_login_get = async (req, res) => {
  res.render("login");
};
const user_login = async (req, res) => {
  const body = req.body;
  try {
    var user = await User.login(body.email, body.pass);
    const token = createToken(user._id);
    res.status(200).render('dashboard', {user});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const single_user = (req, res) => {
  const id = req.params.id;
  User.findById(id).then((result) => {
    const ti = result;
    res.render("details", { ti });
  });
};
module.exports = {
  user_index,
  user_create_get,
  user_create_post,
  single_user,
  user_login,
  user_login_get
};
