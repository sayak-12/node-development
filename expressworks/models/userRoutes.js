const express = require("express");
const functions = require("../controllers/userfunctions.js")
const router = express.Router();
const {requireAuth, loginAuth} = require("../middleware/authmiddleware.js");


router.get("/all-users", functions.user_index)
router.get("/users", functions.user_index)
router.get("/signup", functions.user_create_get)
router.get("/dashboard",requireAuth, functions.user_dashboard)
router.post("/signup", functions.user_create_post)
router.get("/login", loginAuth, functions.user_login_get)
router.get("/logout", functions.user_logout)
router.post("/login", functions.user_login)
router.get("/users/:id", functions.single_user)
module.exports = router;