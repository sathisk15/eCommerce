import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc Get all the products
// @route GET /api/products
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      res.status(404).json({ message: "Incorrect URL", details: error });
    }
  })
);
// @desc fetch single product
// @route GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: "Product Not Found", details: error });
    }
  })
);
export default router;
