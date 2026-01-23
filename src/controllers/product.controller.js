import Product from "../schema/product_detail.schema.js";

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.find({ name: id });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Error while fetching products" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(401).json({ message: "Error while fetching products" });
  }
};

export const addNewProduct = async (req, res) => {
  try {
    const product = req.body;

    await Product.insertOne(product);

    res.status(201).json({ message: "Product Added" });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Error while adding product" });
  }
};
