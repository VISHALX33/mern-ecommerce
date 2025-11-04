import Product from "../models/productModel.js";

// ✅ GET all products (with optional category filter)
// GET all products or by category
// GET all products or by category
export const getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};

    if (category) {
      // use regex to match case-insensitive and partial words
      filter.category = new RegExp(category.replace(/-/g, " "), "i");
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// GET single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST add product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
