const checkBody = (body) => {
  if (body.username == undefined || body.username == "") {
    return {
      code: 400,
      message: "Required field missing",
      field: "username",
    };
  } else if (body.email == undefined || body.email == "") {
    return {
      code: 400,
      message: "Required field missing",
      field: "email",
    };
  } else if (body.password == undefined || body.password == "") {
    return {
      code: 400,
      message: "Required field missing",
      field: "password",
    };
  }
};

module.exports = { checkBody };
