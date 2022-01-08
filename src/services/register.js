const User = require("../models/User");
const checkBody = require("../../utils/checkBody");

const userRegister = async (req, res) => {
  try {
    const { username, email, password, secretKey } = req.body;

    const checkB = checkBody(req.body);
    if (checkB) return res.status(400).json(checkB);

    const user = await User.findOne({ email: email });
    if (user) return res.status(409).json({ message: "Email already exists" });

    const userDetails = new User({
      username,
      email,
      password,
      secretKey,
    });

    const result = await userDetails.save();
    return res.status(200).json({
      code: 200,
      message: "Success",
      result: result,
    });
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

module.exports = userRegister;
