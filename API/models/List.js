const mongoose = require("mongoose");

const List = new mongoose.model(
  "List",
  mongoose.Schema(
    {
      title: {
        type: String,
        trim: true,
        required: true,
      },

      body: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = List;
