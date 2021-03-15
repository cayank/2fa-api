const router = require("express").Router();
const serviceLogin = require("../services/login");
const { check, validationResult } = require("express-validator");

router.post(
  "/login",
  [
    check("email", "You should enter a valid email").isEmail(),
    check("password", "Password must be 6 characters").isLength({ min: 6 }),
  ],
  serviceLogin.userLogin
),
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.array().length !== 0) {
      return res.status(400).send({
        code: 400,
        message: errors.array(),
      });
    }
  };

module.exports = router;
