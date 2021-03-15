const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      max: 256,
    },
    email: {
      type: String,
      required: true,
      min: 4,
      max: 256,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 256,
    },
    secretKey: {
      type: String,
      max: 256,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
