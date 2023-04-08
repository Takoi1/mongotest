const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);