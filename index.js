"use strict";

import express from "express";
const app = express();

app.get("/posts", (req, res) => {
  res.send("Hello, World!");
});

app.listen(13288, () => console.log("Server is listening on port 13288"));
