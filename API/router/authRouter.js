const router = require("express").Router();
const { signup, login, signout } = require("../controllers/auth");
const { signupValidator } = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/signup", signup);
router.post("/signin", login);
router.get("/signout", signout);

module.exports = router;
