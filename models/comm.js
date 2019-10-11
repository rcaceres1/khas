const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commSchema = new Schema(
  {
    username: { type: String, required: true },
    student: { type: String, required: true },
    date: { type: Date, required: true },
    rating: { type: String, required: true },
    ate: { type: String, required: true },
    fun: { type: String, required: true },
    notes: { type: String },
    need: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comm", commSchema);
