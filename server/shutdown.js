import { closePg } from "../db/pg.js";
import server from "./socket.js";

export const shutdownApplication = async () => {
  await closePg();

  server.closeAllConnections();
  server.close(() => {
    console.log("Server closed, stopped listening.");
  });
};
