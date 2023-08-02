const express = require("express");
const functions = require("../controllers/userfunctions.js")
const router = express.Router();


router.get("/all-users", functions.user_index)
router.get("/signup", functions.user_create_get)
router.post("/signup", functions.user_create_post)

router.get("/users/:id", functions.single_user)
module.exports = router;