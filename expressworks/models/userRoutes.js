const express = require("express");
const functions = require("../controllers/userfunctions.js")
const router = express.Router();


router.get("/all-users", functions.user_index)
router.get("/users", functions.user_index)
router.get("/signup", functions.user_create_get)
router.post("/signup", functions.user_create_post)
router.get("/login", functions.user_login_get)
router.post("/login", functions.user_login)
router.get("/users/:id",functions.checkIdParameter, functions.single_user)
module.exports = router;