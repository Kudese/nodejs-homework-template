const { userCurrent } = require("../../models/auth");
const jwt = require("jsonwebtoken");

const userCurrentController = async (req, res) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, process.env.secretJWT);
    const { id } = decodedToken;
  const result = await userCurrent(id);
  return res.status(result.status).json(result.msg);
};
module.exports = userCurrentController;
