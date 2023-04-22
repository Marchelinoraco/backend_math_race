import express from "express";
import {
  getQuestions,
  getQuestionById,
  createQuestions,
  updateQuestions,
  deleteQuestion,
} from "../controllers/Questions.js";

const router = express.Router();

router.get("/questions", getQuestions);
router.get("/question/:id", getQuestionById);
router.post("/question", createQuestions);
router.patch("/question/:id", updateQuestions);
router.delete("/question/:id", deleteQuestion);

export default router;
