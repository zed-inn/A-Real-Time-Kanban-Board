import dotenv from "dotenv";
dotenv.config();

const server = {
  host: process.env.HOST ?? "localhost",
  port: process.env.PORT ?? 3000,
  url: `http://${process.env.HOST ?? "localhost"}:${process.env.PORT ?? 3000}`,
  socket: {
    origin: process.env.SOCKET_ORIGIN ?? "*",
  },
};

const db = {
  pg: {
    dialect: "postgres",
    server: process.env.PG_SERVER ?? "localhost",
    database: process.env.PG_DB ?? "kanban-nodejs",
    username: process.env.PG_USERNAME ?? "postgres",
    password: process.env.PG_PASSWORD ?? "password",
  },
  redis: { dialect: "redis", uri: process.env.REDIS_URI },
};

/**
 * Application Environment
 */
export const env = { server, db };
