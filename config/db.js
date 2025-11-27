import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

configDotenv();

const db = new Sequelize(process.env.CONEXION, {
  host: process.env.HOST,
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

export default db;

