import { Sequelize } from "sequelize";

const db = new Sequelize("db_math_race", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
