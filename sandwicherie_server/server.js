import express from "express";
import cors from "cors";
import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import * as dotenv from "dotenv";
import { UsersModel } from "./model/users.js";
import { CommandesModel } from "./model/commandes.js";
import { IngredientCommandesModel } from "./model/ingredients_commandes.js";
import { IngredientsModel } from "./model/ingredients.js";
import bodyParser from "body-parser";

//VARIABLES
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

//ORM
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USERNAME_DB,
  process.env.PASSWORD_DB,
  {
    host: process.env.HOST_DB,
    dialect: "mysql",
  }
);

//AUTHENTICATE
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//CREATE TABLE FROM ORM TO SQL WORKBENCH
export const User = UsersModel(sequelize, DataTypes);
export const Commandes = CommandesModel(sequelize, DataTypes);
export const IngredientsCommande = IngredientCommandesModel(
  sequelize,
  DataTypes
);
export const Ingredients = IngredientsModel(sequelize, DataTypes);

//ASSOCIATION BETWEEN MODELS
User.hasMany(Commandes);
Commandes.hasMany(IngredientsCommande);
Ingredients.hasMany(IngredientsCommande);

// SYNC ALL CREATE TABLE
sequelize.sync({ force: true }).then((_) => {
  Ingredients.create({
    name: "salut",
  });
});

//ROUTES
app.get("/", cors(), (req, res) => {
  res.json({ msg: "hello world" });
});

app.get("/ingredients", cors(), async (req, res) => {
  const ingredients = await Ingredients.findAll();
  res.json({ data: ingredients });
});

app.post("/ingredients", (req, res) => {
  Ingredients.create(req.body).then((element) => {
    const message = `La taille ${req.body.name} a bien été creer`;
    res.json({ message, data: element });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// TODO :
// Faire un useState object HOC, et l'ingrementer au fur et a mesure des composants.
// A la fin, convertir les donnes en JSON, et post. 

