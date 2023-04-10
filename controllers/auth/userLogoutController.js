const { userLogout } = require("../../models/auth");

const userLogoutController = async (req, res) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];
  const result = await userLogout(token);
  return res.status(result.status).json(result.msg);
};

module.exports = userLogoutController;
