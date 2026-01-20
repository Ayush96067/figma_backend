import dotenv from "dotenv";

import connectDB from "./config/db.js";
import Review from "./schema/reviews.schema.js";
import Question from "./schema/questions.schema.js";

import fs from "fs";

dotenv.config();

const rawReviews = JSON.parse(
  // fs.readFileSync("./src/data/reviews.json", "utf-8"),
  fs.readFileSync("./src/data/questions.json", "utf-8"),
);

const importData = async () => {
  try {
    await connectDB();

    console.log("Clearing old reviews");
    // await Review.deleteMany();
    await Question.deleteMany();

    console.log("Transformation & Import...");

    const formattedReviews = rawReviews.map((item) => ({
      ...item,
      productId: decodeURIComponent(item.productId),
      date: new Date(item.date),
    }));

    // await Review.insertMany(formattedReviews);
    await Question.insertMany(formattedReviews);

    console.log("✅ Data Imported Successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error with data import:", error);
    process.exit(1);
  }
};

importData();
