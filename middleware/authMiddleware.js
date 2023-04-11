const jwt = require("jsonwebtoken");
const { users } = require("../models/Schema");

const checkToken = async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "You are not logged in.." });
  try {
    const decodedToken = await jwt.verify(token, process.env.secretJWT);
    const { id } = decodedToken;
    const findUser = await users.findById(id);

    if (findUser.token === token) {
      return next();
    }
    return res.status(401).json({ message: "Not authorized" });
  } catch (error) {
    return res.status(401).json({ message: "Not authorized bad token" });
  }
};

module.exports = checkToken;
