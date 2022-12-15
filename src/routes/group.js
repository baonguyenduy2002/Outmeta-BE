const express = require("express");
const router = express.Router();
const groupController = require("../controller/GroupController");
const group = require("../controller/models/group");

router.get("/:group_id/update", groupController.updateView);
router.put("/:group_id", groupController.update);
router.post("/store", groupController.store);
router.get("/insert", groupController.add);
router.delete("/:group_id", groupController.remove);
router.post("/posts", groupController.showposts);
router.get("/:group_id", groupController.show);
router.post("/", groupController.indexsearch);
router.get("/", groupController.index);

module.exports = router;
