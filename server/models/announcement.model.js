const mongoose = require("mongoose");

const { Schema } = mongoose;

const announcementSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image_urls: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const announcementModel = mongoose.model("announcement", announcementSchema);

module.exports = announcementModel;
