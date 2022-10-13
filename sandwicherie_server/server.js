import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { allIngredients } from "./Ingredients.js";
import { sequelize } from "./ORM/Host.js";
import { User, Commandes, Ingredients, jonctIngr } from "./ORM/Table.js";
import { router } from "./ORM/web.js";

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

app.use(router);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
