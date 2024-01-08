const router = require("express").Router();
const announcementController = require("../controllers/announcements.controller");
const multer = require("multer");

const { upload } = require("../middlewares/multer.middleware");

router.get("/", announcementController.getAllAnnouncements);
router.get("/:id", announcementController.getAnnouncement);
router.post("/", upload.array("images"), announcementController.addAnnouncement);
router.patch("/:id", upload.array("images"), announcementController.updateAnnouncement);
router.delete("/:id", announcementController.deleteAnnouncement);

module.exports = router;
