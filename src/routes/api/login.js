const router = require("express").Router();
const loginRouter = require("../../controllers/login");

router.use("/users", loginRouter);

module.exports = router;
