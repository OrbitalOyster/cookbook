"use strict"

import mongoose from "mongoose";

export async function connectToMongoDB(mongoUrl)
{
  mongoose.connection.on("connected", () => console.log(`Connected to ${mongoose.connection.db.databaseName} DB`));
  mongoose.connection.on("disconnected", () => console.log(`Disconnected from ${mongoose.connection.db.databaseName} DB`));
  await mongoose.connect(mongoUrl);
}
