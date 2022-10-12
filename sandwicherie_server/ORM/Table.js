import { UsersModel } from "../model/users.js";
import { CommandesModel } from "../model/commandes.js";
import { IngredientsModel } from "../model/ingredients.js";
import { IngredientCommandesModel } from "../model/ingredients_commandes.js";
import { DataTypes } from "sequelize";
import { sequelize } from "../ORM/Host.js";

//CREATE TABLE FROM ORM TO DB
const User = UsersModel(sequelize, DataTypes);
const Commandes = CommandesModel(sequelize, DataTypes);
const Ingredients = IngredientsModel(sequelize, DataTypes);
const jonctIngr = IngredientCommandesModel(sequelize, DataTypes);

export { User, Commandes, Ingredients, jonctIngr };
