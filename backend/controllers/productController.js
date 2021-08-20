import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Get all the products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(404).json({ message: "Incorrect URL", details: error });
  }
});
// @desc fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: "Product Not Found", details: error });
  }
});

export { getProductById, getProducts };
