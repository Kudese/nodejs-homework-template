const jwt = require("jsonwebtoken");
const { userAvatar } = require("../../models/auth");
const userAvatarController = async (req, res) => {
  if (req.error) res.status(req.error.status).json(req.error.msg);

  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = await jwt.verify(token, process.env.secretJWT);
  const { id } = decodedToken;
  const result = await userAvatar(id, req.file);

  res.status(result.status).json(result.msg);
};
module.exports = userAvatarController;
