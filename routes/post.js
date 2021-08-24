const express = require("express");
const postsController = require("../controllers/post.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", checkAuthMiddleware.checkAuth, postsController.save);
router.patch("/:id", checkAuthMiddleware.checkAuth, postsController.update);
router.delete("/:id", checkAuthMiddleware.checkAuth, postsController.destroy);

module.exports = router;
