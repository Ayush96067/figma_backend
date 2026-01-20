import { readJSON, writeJSON } from "../../utils/fileStorage.js";
import Review from "./../../schema/reviews.schema.js";

export const addReview = async (req, res) => {
  const reviews = readJSON("reviews.json");

  const review = {
    ...req.body,
    productId: decodeURIComponent(req.body.productId),
  };

  await Review.insertOne(review);

  res.status(201).json({ message: "Added review" });
};

export const getReview = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error("Error while fetching the data");
    res.status(400).json({ message: "Not able to fetch the data" });
  }
};
