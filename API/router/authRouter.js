const router = require("express").Router();
const { signup } = require("../controllers/auth");
const { signupValidator } = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/signup", signup);

module.exports = router;
