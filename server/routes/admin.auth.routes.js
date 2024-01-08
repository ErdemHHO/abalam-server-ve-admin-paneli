const router = require("express").Router();
const adminAuthController = require("../controllers/admin.auth.controller");



router.get("/admins", adminAuthController.getAllAdmins);
router.get("/admin/:id", adminAuthController.getAdmin);

router.post("/signin", adminAuthController.signin);

router.post("/signup", adminAuthController.signup);

router.delete("/:id", adminAuthController.deleteAdmin);

router.patch("/:id", adminAuthController.updateAdmin);

module.exports = router;
