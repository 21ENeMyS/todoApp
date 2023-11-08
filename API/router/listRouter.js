const router = require("express").Router();
const list = require("../controllers/listController");

router.post("/", list.createList);
router.get("/list", list.findAll);

module.exports = router;
