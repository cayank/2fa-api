const checkBody = ({ username, email, password }) => {
  if (!username || username == "")
    return {
      code: 400,
      message: "Required field missing",
      field: "username",
    };

  if (!email || email == "")
    return {
      code: 400,
      message: "Required field missing",
      field: "email",
    };

  if (!password || password == "")
    return {
      code: 400,
      message: "Required field missing",
      field: "password",
    };
};

module.exports = checkBody;
