const router = require("express").Router();
const { find } = require("../controllers/userController");

router.get("/user/:name", find);

module.exports = router;
