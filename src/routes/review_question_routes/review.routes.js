import express from "express";
import {
  addReview,
  getReviewById,
} from "../../controllers/review_question_controller/review.controller.js";

const router = express.Router();

router.get("/reviews/:id", getReviewById);

router.post("/reviews", addReview);

export default router;
