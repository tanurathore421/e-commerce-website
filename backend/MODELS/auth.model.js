const mongoose = require("mongoose");

const userAuthSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
       lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
      phone: {
      type: String,
      required: true,
    
    },

      address: {
      type: String,
      required: true,
      trim: true,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Auth", userAuthSchema);
