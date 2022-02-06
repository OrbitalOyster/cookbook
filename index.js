"use strict";

import express, { json } from "express";
import mongoose from "mongoose";

const port = process.env["PORT"];
const mongoUrl = process.env["MONGO_URL"];
let server;
const app = express();

let posts = [
  {
    title: "Sample post",
    date: Date.now(),
    content: "Hello, World!"
  }
];

mongoose.connection.on("connected", () => console.log(`Connected to ${mongoose.connection.db.databaseName} DB`));
mongoose.connection.on("disconnected", () => console.log(`Disconnected from ${mongoose.connection.db.databaseName} DB`));
await mongoose.connect(mongoUrl);

app.use(json());

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const title = req.body.title;
  const date = Date.now();
  const content = req.body.content;
  posts.push({title, date, content});
  res.sendStatus(200);
});

server = app.listen(port, () => console.log(`Server is listening on port ${port}`));
server.on("close", () => console.log("Server closed"));

process.on("SIGINT", close);

async function close() {
  console.log("\nSIGINT received, shutting down...");
  await mongoose.disconnect();
  server.close();
  process.exit(0);
}
