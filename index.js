"use strict";

import express, { json } from "express";
import mongoose from "mongoose";

import "./models/post.js";

const port = process.env["PORT"];
const mongoUrl = process.env["MONGO_URL"];
const app = express();

mongoose.connection.on("connected", () => console.log(`Connected to ${mongoose.connection.db.databaseName} DB`));
mongoose.connection.on("disconnected", () => console.log(`Disconnected from ${mongoose.connection.db.databaseName} DB`));
await mongoose.connect(mongoUrl);

const Post = mongoose.model("post");

app.use(json());

app.get("/posts", async (req, res) => {
  res.json(await Post.find());
});

app.get("/posts/:id", async (req, res) => {
  const id = req.params["id"];
  if (!mongoose.isValidObjectId(id))
    res.sendStatus(400)
  else
  {
    const found = await Post.findById(id);
    if (!found)
      res.sendStatus(404)
    else
      res.json(found);
  }
});

app.post("/posts", async (req, res) => {
  const title = req.body.title;
  const date = Date.now();
  const content = req.body.content;
  const newPost = new Post({date, title, content});
  await newPost.save();
  res.sendStatus(200);
});

app.patch("/posts/:id", async (req, res) => {
  const id = req.params["id"];
  if (!mongoose.isValidObjectId(id))
    res.sendStatus(400)
  else
  {
    const found = await Post.findById(id);
    if (!found)
      res.sendStatus(404)
    else
    {
      const title = req.body.title;
      const content = req.body.content;
      title && (found.title = title, found.date = Date.now());
      content && (found.content = content, found.date = Date.now());
      await found.save();
      res.sendStatus(200);
    }
  }
});

app.delete("/posts/:id", async (req, res) => {
  const id = req.params["id"];
  if (!mongoose.isValidObjectId(id))
    res.sendStatus(400)
  else
  {
    const found = await Post.findById(id);
    if (!found)
      res.sendStatus(404)
    else
    {
      await Post.deleteOne({id});
      res.sendStatus(200);
    }
  }
});

let server = app.listen(port, () => console.log(`Server is listening on port ${port}`));

function close()
{
  server.close();
  server.on("close", async () => {
    console.log("Server closed");
    await mongoose.disconnect();
    process.exit(0);
  });
}

process.on("SIGINT", close);

app.get("/close", (req, res) => {
  res.sendStatus(200);
  close();
});
