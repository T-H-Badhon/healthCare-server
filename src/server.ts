import { Server } from "http";
import app from "./app";

const port = 5000;

const main = async () => {
  const server: Server = app.listen(port, () => {
    console.log("app is listening on port: ", port);
  });
};

main();
