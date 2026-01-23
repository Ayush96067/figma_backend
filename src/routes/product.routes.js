import express from "express";
import {
  addNewProduct,
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/products", getAllProducts);

router.get("/products/:id", getProductById);

router.post("/products", addNewProduct);

export default router;
