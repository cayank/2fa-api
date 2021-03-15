require("dotenv/config");
const app = require("./app");
const { connectDB } = require("./db/connection");
const port = 3000 || process.env.DB_PORT;

connectDB(process.env.DB_CONNECTURL)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
