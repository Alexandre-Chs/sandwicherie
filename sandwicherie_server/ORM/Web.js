import {
  getIngredients,
  postIngredients,
} from "./Routes/IngredientController.js";
import { getUsers, postUsers } from "./Routes/UsersController.js";
import {
  getCommand,
  postCommand,
  delCommand,
} from "./Routes/CommandController.js";
import express from "express";

export const router = express.Router();

router.get("/ingredients", getIngredients);
router.post("/ingredients", postIngredients);

router.get("/users", getUsers);
router.post("/users", postUsers);

router.get("/command", getCommand);
router.post("/command", postCommand);
router.delete("/command/:id", delCommand);
