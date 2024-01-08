const mongoose = require("mongoose");
const slugify = require("slugify");

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    image_urls: [
      {
        type: String,
      },
    ],
    slug: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { collection: "categories", timestamps: true, versionKey: false }
);

categorySchema.pre("save", async function (next) {
  if (this.isModified("name") || this.isNew) {
    const nameSlug = slugify(this.name, { lower: true, remove: /[*+~.()'"!:@]/g });
    const slug = nameSlug.replace(/\s+/g, "-");
    this.slug = `${slug}`;

    const similarSlugCount = await this.constructor.countDocuments({ slug: this.slug });
    if (similarSlugCount > 0) {
      const error = new Error("Bu kategori zaten var.");
      return next(error);
    }
  }

  next();
});

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;
