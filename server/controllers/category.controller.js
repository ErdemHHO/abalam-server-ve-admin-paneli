const Category = require("../models/category.model");
const Product = require("../models/product.model");
const slugify = require("slugify");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories || categories.length === 0) return res.status(400).json({ success: false, message: "Kategori bulunamadi" });
    res.status(200).json({ success: true, categories });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};
const getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.id });

    if (!category || category.length === 0) return res.status(400).json({ success: false, message: "Kategori bulunamadi" });

    const id = category._id;
    const product = await Product.find({ category_id: category.id });

    if (!product || product.length === 0) return res.status(400).json({ success: false, message: "Kategoriye ait urun bulunamadi" });

    res.status(200).json({ success: true, product });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const addCategory = async (req, res) => {
  try {
    const { body, files } = req;

    if (files) {
      const image_url = files.map((file) => file.path.replace("public/", ""));
      const newCategory = await Category.create({ ...body, image_urls: image_url });
      return res.status(201).json({ success: true, message: "Kategori basariyla eklendi", newCategory });
    }

    const newCategory = await Category.create({ ...body });
    res.status(201).json({ success: true, message: "Resimsiz Kategori basariyla eklendi.", newCategory });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};
const updateCategory = async (req, res) => {
  try {
    const { body, files } = req;
    const category = await Category.find({ slug: req.params.id });

    if (!category || category.length === 0) {
      return res.status(400).json({ success: false, message: "Kategori bulunamadi" });
    }

    const nameSlug = slugify(req.body.name, { lower: true, remove: /[*+~.()'"!:@]/g });
    const slug = nameSlug.replace(/\s+/g, "-");

    body.slug = slug;

    const image_url = files.map((file) => file.path.replace("public/", ""));
    const updatedCategory = await Category.findByIdAndUpdate(category[0]._id, { ...body, image_urls: image_url }, { new: true });
    res.status(200).json({ success: true, message: "Kategori basariyla guncellendi", updatedCategory });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.find({ slug: req.params.id });
    if (!category || category.length === 0) {
      return res.status(400).json({ success: false, message: "Kategori bulunamadi" });
    }
    await Category.findByIdAndDelete(category[0]._id);
    res.status(200).json({ success: true, message: "Kategori basariyla silindi" });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
};
