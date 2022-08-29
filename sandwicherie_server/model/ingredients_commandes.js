export const IngredientCommandesModel = (sequelize, DataTypes) => {
  return sequelize.define("ingredients_commandes", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
};
