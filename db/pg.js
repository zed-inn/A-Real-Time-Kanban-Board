import { Sequelize } from "sequelize";
import { env } from "../env/env.config.js";

const pg = env.db.pg;

const db = new Sequelize(pg.database, pg.username, pg.password, {
  host: pg.server,
  dialect: pg.dialect,
  logging: console.log,
});

export const connectToPg = async () => {
  await db.authenticate();

  console.log("Connected to Postgresql database");
};

export const closePg = async () => {
  await db.close();

  console.log("Closed Postgresql connection");
};

export default db;
