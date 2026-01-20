import express from "express";
import {
  addQuestions,
  getQuestions,
} from "../../controllers/review_question_controller/question.controller.js";

const router = express.Router();

router.get("/questions", getQuestions);
router.post("/questions", addQuestions);

export default router;
