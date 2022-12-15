const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const user = require("../controller/models/user");

router.get("/:user_id/update", userController.updateView);
router.put("/:user_id", userController.update);
router.post("/store", userController.store);
router.get("/insert", userController.add);
router.post("/follow", userController.follow);
router.delete("/:user_id", userController.remove);
router.get("/:user_id", userController.show);
router.post("/", userController.index);
router.get("/", userController.index);

module.exports = router;
