require("dotenv/config");
const app = require("./app");
const { connectDB } = require("./db/connection");
const port = process.env.DB_PORT || 3000;

connectDB(process.env.DB_CONNECTURL)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

app.listen(port, () => {
  console.log("Server is running at %d", port);
});
