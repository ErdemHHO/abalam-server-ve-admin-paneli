const mongoose = require("mongoose");
const slugify = require("slugify");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
    urun_kodu: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Boolean,
      default: true,
      required: true,
    },
    old_price: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    isNewProduct: {
      type: Boolean,
      default: false,
    },
    image_urls: [
      {
        type: String,
      },
    ],
    slug: {
      type: String,
      unique: true,
      validate: {
        validator: async function (value) {
          const product = await this.constructor.findOne({ slug: value });
          return !product;
        },
        message: "Bu ürün zaten var.",
      },
    },
  },
  { versionKey: false, timestamps: true }
);

// Pre-save hook to generate slug
productSchema.pre("save", async function (next) {
  const nameSlug = slugify(this.name, { lower: true, remove: /[*+~.()'"!:@]/g });
  const slug = nameSlug.replace(/\s+/g, "-");
  this.slug = `${slug}-${this.urun_kodu}`;

  const similarSlugCount = await this.constructor.countDocuments({ slug: this.slug });
  if (similarSlugCount > 0) {
    const error = new Error("Bu ürün zaten var.");
    return next(error);
  }

  next();
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
