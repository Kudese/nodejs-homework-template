const { users } = require("../Schema");
const jwt = require("jsonwebtoken");
const userLogout = async (token) => {
  try {
    const decodedToken = await jwt.verify(token, process.env.secretJWT);
    const { id } = decodedToken;
    const findUser = await users.findByIdAndUpdate (id, { token: null });
    console.log(findUser);
    return { status: 204, msg: "No Content" };
  } catch (error) {
    return { status: 500, msg: "DB not delit token" };
  }
};
module.exports = userLogout;
