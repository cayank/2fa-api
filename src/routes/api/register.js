const router = require("express").Router();
const registerRouter = require("../../controllers/register");

router.use("/users", registerRouter);

module.exports = router;
