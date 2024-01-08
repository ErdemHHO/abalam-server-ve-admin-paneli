const router = require("express").Router();
const productController = require("../controllers/product.controller");

const { upload } = require("../middlewares/multer.middleware");

router.get("/", productController.getAllProducts);
router.get("/search", productController.searchProduct);
router.get("/:id", productController.getProduct);
router.post("/", upload.array("images"), productController.addProduct);
router.patch("/:id", upload.array("images"), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
