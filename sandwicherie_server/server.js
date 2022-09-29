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
import { allIngredients } from "./Ingredients.js";

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
export const Ingredients = IngredientsModel(sequelize, DataTypes);

//ASSOCIATION BETWEEN MODELS
User.hasMany(Commandes, { foreignKey: "user_id" });
Commandes.belongsTo(User, { foreignKey: "user_id" });

Commandes.belongsToMany(Ingredients, { through: "IngredientsCommande" });
Ingredients.belongsToMany(Commandes, { through: "IngredientsCommande" });

// SYNC ALL CREATE TABLE
await sequelize.sync({ force: true });

//ROUTES
app.get("/", cors(), (req, res) => {
  res.json({ msg: "hello world" });
});

for (const ingr of allIngredients) {
  await Ingredients.create(ingr);
}

//ALL INGREDIENTS GET
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

//USERS
app.get("/users", cors(), async (req, res) => {
  const users = await User.findAll();
  res.json({ data: users });
});

app.post("/users", (req, res) => {
  User.create(req.body).then((element) => {
    const message = `Un nouveau users au telephone ${req.body.phone} a bien été creer`;
    res.json({ message, data: element });
  });
});

app.post("/command", async (req, res) => {
  let arrPost = req.body;

  let reqTelephone = {};
  arrPost.map((element) => {
    reqTelephone = { phone: element.Telephone };
  });

  console.log(reqTelephone);
  User.create(reqTelephone);
  // let myNewUser = await User.create({ phone: req.body.Telephone });
  // let myNewCommand = await Commandes.create({ userId: myNewUser.id });
  // for (const viande of req.body.viandes) {
  //   await IngredientCommand.create({
  //     commandId: myNewCommand.id,
  //     ingredientId: viande,
  //   });
  //}
});

app.get("/command", cors(), async (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
