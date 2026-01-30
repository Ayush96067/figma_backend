import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reviewRoutes from "./routes/review_question_routes/review.routes.js";
import questionRoutes from "./routes/review_question_routes/question.routes.js";
import authRoutes from "./routes/authentication.routes.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", reviewRoutes);
app.use("/api", questionRoutes);
app.use("/api", productRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
