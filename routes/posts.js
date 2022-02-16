"use strict"

import mongoose from "mongoose";
import { Router } from "express";

const Post = mongoose.model("post");
const postRoutes = Router();

postRoutes.get("/posts", async (req, res) => {
  res.json(await Post.find());
});

postRoutes.get("/posts/:id", async (req, res) => {
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

postRoutes.post("/posts", async (req, res) => {
  const title = req.body.title;
  const date = Date.now();
  const content = req.body.content;
  const newPost = new Post({date, title, content});
  await newPost.save();
  res.sendStatus(200);
});

postRoutes.patch("/posts/:id", async (req, res) => {
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

postRoutes.delete("/posts/:id", async (req, res) => {
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

export { postRoutes };
