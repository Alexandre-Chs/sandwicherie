export const IngredientCommandesModel = (sequelize, DataTypes) => {
  return sequelize.define("ingredientsCommande", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    commandeId: {
      type: DataTypes.INTEGER,
    },
    ingredientId: {
      type: DataTypes.INTEGER,
    },
  });
};
