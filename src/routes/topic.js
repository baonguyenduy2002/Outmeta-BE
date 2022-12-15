const express = require("express");
const router = express.Router();
const topicController = require("../controller/TopicController");
const topic = require("../controller/models/topic");

router.get("/:topic_id/update", topicController.updateView);
router.put("/:topic_id", topicController.update);
router.post("/store", topicController.store);
router.get("/insert", topicController.add);
router.delete("/:topic_id", topicController.remove);
router.get("/:topic_id", topicController.show);
router.post("/", topicController.indexsearch);
router.get("/", topicController.index);

module.exports = router;
