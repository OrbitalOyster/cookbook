import mongoose from "mongoose"

const postSchema = mongoose.Schema(
  {
    date: { type: Date, required: true },
    title: { type: String },
    content: { type: String, required: true }
  }
);

mongoose.model("post", postSchema);
