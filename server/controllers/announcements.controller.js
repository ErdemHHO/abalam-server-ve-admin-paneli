const Announcement = require("../models/announcement.model");

const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    if (announcements.length === 0) return res.status(400).json({ success: false, message: "Duyuru bulunamadi" });
    res.status(200).json({ success: true, announcements });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};
const getAnnouncement = async (req, res) => {
  try {
    const announcements = await Announcement.findById(req.params.id);
    if (!announcements) return res.status(400).json({ success: false, message: "Duyuru bulunamadi" });
    res.status(200).json({ success: true, announcements });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const addAnnouncement = async (req, res) => {
  try {
    const { body, files } = req;
    if (files) {
      const image_url = files.map((file) => file.path.replace("public/", ""));
      const newAnnouncements = await Announcement.create({ ...body, image_urls: image_url });
      return res.status(201).json({ success: true, message: "Duyuru basariyla eklendi", newAnnouncements });
    }
    const newAnnouncements = await Announcement.create({ ...body });
    res.status(201).json({ success: true, message: "Resimsiz Duyuru basariyla eklendi", newAnnouncements });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};
const updateAnnouncement = async (req, res) => {
  try {
    const { body, files } = req;
    const image_url = files.map((file) => file.path.replace("public/", ""));
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(req.params.id, { ...body, image_urls: image_url }, { new: true });
    if (!updatedAnnouncement) return res.status(400).json({ success: false, message: "Duyuru bulunamadi" });
    res.status(200).json({ success: true, message: "Duyuru basariyla guncellendi", updatedAnnouncement });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndDelete(req.params.id);
    if (!announcement) return res.status(400).json({ success: false, message: "Duyuru bulunamadi" });
    res.status(200).json({ success: true, message: "Duyuru basariyla silindi" });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  getAllAnnouncements,
  getAnnouncement,
  addAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
