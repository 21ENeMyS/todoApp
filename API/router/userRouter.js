const router = require("express").Router();
const { find } = require("../controllers/userController");

router.get("/user/:username", find);

module.exports = router;
