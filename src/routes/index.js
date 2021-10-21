const fs = require("fs");
const routerFiles = fs.readdirSync(__dirname + "/api");
/**
 * @param app Express app
 */

const init = (app) => {
  routerFiles.forEach((file) => {
    app.use("/api", require(__dirname + "\\api\\" + file));
  });

  app.all("*", (req, res) => {
    return res
      .status(404)
      .json({
        code: 404,
        message: "Page not found",
      })
      .end();
  });
};

module.exports = { init };
