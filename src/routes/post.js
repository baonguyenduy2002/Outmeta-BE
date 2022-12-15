const express = require("express");
const router = express.Router();
const postController = require("../controller/PostController");
const post = require("../controller/models/post");

router.get("/:post_id/update", postController.updateView);
router.put("/:post_id", postController.update);
router.post("/store", postController.store);
router.get("/insert", postController.add);
router.delete("/:post_id", postController.remove);
router.get("/:post_id", postController.show);
router.post("/", postController.indexsearch);
router.get("/", postController.index);

module.exports = router;
