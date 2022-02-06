"use strict";

import express from "express";

const port = process.env["PORT"];
const app = express();

app.get("/posts", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
