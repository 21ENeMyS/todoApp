const router = require("express").Router();
const list = require("../controllers/listController");

router.post("/", list.createList);
router.get("/list", list.findAll);
router.get("/list/:title", list.findOne);
router.delete("/:title", list.deleteList);
router.put("/edit/:title", list.editList);

module.exports = router;
