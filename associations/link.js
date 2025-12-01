import db from "../db/pg.js";
import Card from "../models/Card.js";

export const linkDb = async () => {
  await db.sync({ alter: true });
  console.log("DB Linked...");
};
