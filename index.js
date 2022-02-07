"use strict";

import express from "express";

const port = process.env["PORT"];
const app = express();

app.get("/posts", (req, res) => {
  res.send("Hello, World!");
});

let server = app.listen(port, () => console.log(`Server is listening on port ${port}`));

function close()
{
  server.close();
  server.on("close", () => {
    console.log("Server closed");
    process.exit(0);
  });
}

process.on("SIGINT", close);

app.get("/close", (req, res) => {
  res.sendStatus(200);
  close();
});
