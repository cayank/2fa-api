require("dotenv/config");
const User = require("../src/models/User");
const twofactor = require("node-2fa");

const checkAccount = async (email, password, secretKey) => {
  const userAccount = await User.findOne({ email: email });
  if (!userAccount) return { code: 404, message: "Email is not found" };

  if (userAccount.password != password) {
    return { code: 401, message: "The password is wrong" };
  }

  if (!secretKey)
    return { code: 400, message: "Missing field required", field: "secretKey" };

  const getKey = twofactor.generateToken(userAccount.secretKey);
  if (process.env.NODE_ENV === "development") {
    console.log(JSON.stringify(getKey));
  }

  if (getKey.token != secretKey) {
    return { code: 401, message: "The secret key is wrong" };
  } else {
    return { code: 200, message: `Welcome, ${userAccount.username}!` };
  }
};

module.exports = { checkAccount };
