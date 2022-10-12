import { getIngredients } from "./Routes/IngredientController.js";
import express from "express";

export const router = express.Router();

router.get("/ingredients", getIngredients);
