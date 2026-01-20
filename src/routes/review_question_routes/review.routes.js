import express from "express";
import {
  addReview,
  getReview,
} from "../../controllers/review_question_controller/review.controller.js";

const router = express.Router();

router.get("/reviews", getReview);
router.post("/reviews", addReview);

export default router;
