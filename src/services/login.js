const checkAccount = require("../../utils/checkAccount");

const userLogin = async (req, res) => {
  try {
    const getResult = await checkAccount(req.body);

    if (getResult) return res.status(getResult.code).json(getResult);
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

module.exports = userLogin;
