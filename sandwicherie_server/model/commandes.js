export const CommandesModel = (sequelize, DataTypes) => {
  return sequelize.define("commandes", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
};
