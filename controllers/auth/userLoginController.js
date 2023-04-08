
const { userLogin } = require("../../models/auth");

// const { shemaUserLogin } = require("../../validate/validateUsers")

const userLoginController = async (res, req) => {
  // const isValidate = shemaUserLogin.validate(res.body)
  const result = await userLogin(res)
  return  req.status(result.status).json(result.msg)
};

module.exports = userLoginController;
