import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { allIngredients } from "./Ingredients.js";

import { sequelize } from "./ORM/Host.js";
import { User, Commandes, Ingredients, jonctIngr } from "./ORM/Table.js";

//VARIABLES
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

//AUTHENTICATE
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//ASSOCIATION BETWEEN MODELS
User.hasMany(Commandes, { foreignKey: "user_id" });
Commandes.belongsTo(User);
Commandes.hasMany(jonctIngr, { foreignKey: "commandeId" });
jonctIngr.belongsTo(Commandes);
Ingredients.hasMany(jonctIngr, { foreignKey: "ingredientId" });
jonctIngr.belongsTo(Ingredients);

// SYNC ALL CREATE TABLE
await sequelize.sync({ force: true });

//CREATE ALL INGR
for (const ingr of allIngredients) {
  await Ingredients.create(ingr);
}

import { router } from "./ORM/Web.js";
app.use(router);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// //ROUTES
// app.get("/", cors(), (req, res) => {
//   res.json({ msg: "hello world" });
// });

// //ALL INGREDIENTS GET
// app.get("/ingredients", cors(), async (req, res) => {
//   const ingredients = await Ingredients.findAll();
//   res.json({ data: ingredients });
// });

// app.post("/ingredients", (req, res) => {
//   Ingredients.create(req.body).then((element) => {
//     const message = `La taille ${req.body.name} a bien été creer`;
//     res.json({ message, data: element });
//   });
// });

// //USERS
// app.get("/users", cors(), async (req, res) => {
//   const users = await User.findAll();
//   res.json({ data: users });
// });

// app.post("/users", (req, res) => {
//   User.create(req.body).then((element) => {
//     const message = `Un nouveau users au telephone ${req.body.phone} a bien été creer`;
//     res.json({ message, data: element });
//   });
// });

// app.post("/command", async (req, res) => {
//   let myNewUser = await User.create({ phone: req.body.telephone });
//   let myNewCommand = await Commandes.create({ user_id: myNewUser.id });
//   let indexIngredient = req.body.ingredients.forEach((element) => {
//     jonctIngr.create({
//       commandeId: myNewCommand.id,
//       ingredientId: element,
//     });
//   });
// });

// app.get("/command", cors(), async (req, res) => {
//   const user = await User.findAll({
//     include: [
//       {
//         model: Commandes,
//         include: [
//           {
//             model: jonctIngr,
//             include: [
//               {
//                 model: Ingredients,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   });

//   res.json({ data: user });
// });

// app.delete("/command/:id", async (req, res) => {
//   const id = req.params.id;
//   const user = await User.destroy({ where: { id: id } });
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
