import Sequelize from "sequelize";

import * as dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USERNAME_DB,
  process.env.PASSWORD_DB,
  {
    host: process.env.HOST_DB,
    dialect: "mysql",
  }
);
