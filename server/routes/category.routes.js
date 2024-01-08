const router = require("express").Router();
const categoryController = require("../controllers/category.controller");
const multer = require("multer");

const { upload } = require("../middlewares/multer.middleware");

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategory);
router.post("/", upload.array("images"), categoryController.addCategory);
router.patch("/:id", upload.array("images"), categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
