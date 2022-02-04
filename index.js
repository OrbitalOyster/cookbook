"use strict";

import express, { json } from "express";
const app = express();

let posts = [
  {
    title: "Sample post",
    date: Date.now(),
    content: "Hello, World!"
  }
];

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

app.listen(13288, () => console.log("Server is listening on port 13288"));
