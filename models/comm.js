const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commSchema = new Schema(
  {
    username: { type: String, required: true },
    student: { type: String, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Comm = mongoose.model("Comm", commSchema);
