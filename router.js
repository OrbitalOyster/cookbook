"use strict"

import express, { json } from "express";

let app;
let server;

function initRouter()
{
  app = express();
  app.use(json());
  return app;
}

function startRouter(port)
{
  server = app.listen(port, () => console.log(`Server is listening on port ${port}`));
}

function closeRouter()
{
  return new Promise((resolve, reject) => {
    server.on("close", () => {
      console.log("Server closed");
      resolve();
    });
    server.close();
  });
}

export { initRouter, startRouter, closeRouter }
