require("dotenv/config");
const mongoose = require("mongoose");

/**
 * @param dbURL - Mongoose Database URL
 */

const connectDB = (dbURL = "") => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then((con) => {
        resolve(con);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  connectDB,
};
