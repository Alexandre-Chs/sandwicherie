import { Ingredients } from "../../ORM/Table.js";

//Get all ingredients to show in front
export async function getIngredients(req, res) {
  const ingredients = await Ingredients.findAll();
  res.json({ data: ingredients });
}

//Post all ingredient to front
export async function postIngredients(req, res) {
  Ingredients.create(req.body).then((element) => {
    res.json({ data: element });
  });
}
