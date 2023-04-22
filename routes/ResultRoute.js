import express from "express";
import {
  getResult,
  getResultById,
  createResult,
  updateResult,
  deleteResult,
} from "../controllers/Result.js";

const router = express.Router();

router.get("/results", getResult);
router.get("/result/:id", getResultById);
router.post("/result", createResult);
router.patch("/result/:id", updateResult);
router.delete("/result/:id", deleteResult);

export default router;
