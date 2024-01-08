const Product = require("../models/product.model");
const slugify = require("slugify");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) return res.status(400).json({ success: false, message: "Ürün bulunamadı" });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.find({ slug: req.params.id });
    console.log(product);
    if (!product || product.length === 0) return res.status(400).json({ success: false, message: "Urun bulunamadı" });

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const { body, files } = req;
    if (body.price > body.old_price) return res.status(400).json({ success: false, message: "Eski fiyat normal fiyattan yüksek olamaz" });
    if (files) {
      const image_url = files.map((file) => file.path.replace("public/", ""));
      const newProduct = await Product.create({ ...body, image_urls: image_url });
      return res.status(201).json({ success: true, message: "Urün basariyla eklendi", newProduct });
    }
    const newProduct = await Product.create({ ...body });
    res.status(201).json({ success: true, message: "Resimsiz ürün basariyla eklendi", newProduct });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { body, files } = req;
    const product = await Product.find({ slug: req.params.id });
    if (!product || product.length === 0) {
      return res.status(400).json({ success: false, message: "Urun bulunamadi" });
    }
    const nameSlug = slugify(req.body.name, { lower: true, remove: /[*+~.()'"!:@]/g });
    let slug = nameSlug.replace(/\s+/g, "-");

    slug = `${slug}-${req.body.urun_kodu}`;
    body.slug = slug;

    console.log(product);
    const image_url = files.map((file) => file.path.replace("public/", ""));
    const updatedProduct = await Product.findByIdAndUpdate(product[0]._id, { ...body, image_urls: image_url }, { new: true });

    res.status(200).json({ success: true, message: "Urun basariyla güncellendi", updatedProduct });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.find({ slug: req.params.id });
    if (product.length === 0) {
      return res.status(400).json({ success: false, message: "Urun bulunamadi" });
    }

    await Product.findByIdAndDelete(product[0]._id);
    res.status(200).json({ success: true, message: "Urun basariyla silindi" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const searchProduct = async (req, res) => {
  try {
    console.log(req.query);
    const { q } = req.query;
    const products = await Product.find({
      $or: [{ name: { $regex: q, $options: "i" } }, { title: { $regex: q, $options: "i" } }, { description: { $regex: q, $options: "i" } }],
    });
    if (!products || products.length === 0) return res.status(400).json({ success: false, message: "Urun bulunamadi" });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
