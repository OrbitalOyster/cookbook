"use strict";

import mongoose from "mongoose";
import "./models/post.js";
import { connectToMongoDB } from "./mongo.js";
import { postRoutes } from "./routes/posts.js";
import { initRouter, closeRouter, startRouter } from "./router.js";

const port = process.env["PORT"];
const mongoUrl = process.env["MONGO_URL"];

await connectToMongoDB(mongoUrl);

const app = initRouter();
app.use(postRoutes);

async function close()
{
  await closeRouter();
  await mongoose.disconnect();
  process.exit(0);
}

process.on("SIGINT", close);

app.get("/close", (req, res) => {
  res.sendStatus(200);
  close();
});

startRouter(port);
