import { Ingredients } from "../../ORM/Table.js";

export async function getIngredients(req, res) {
  const ingredients = await Ingredients.findAll();
  res.json({ data: ingredients });
}
