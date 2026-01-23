import express from "express";
import {
  addQuestions,
  getQuestionsById,
} from "../../controllers/review_question_controller/question.controller.js";

const router = express.Router();

router.post("/questions", addQuestions);
router.get("/questions/:id", getQuestionsById);

export default router;
