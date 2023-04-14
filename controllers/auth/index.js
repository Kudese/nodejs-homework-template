const usersRegisterController = require("./usersRegisterController");
const userLoginController = require("./userLoginController");
const userLogoutController = require("./userLogoutController");
const userCurrentController = require("./userCurrentController");
const userAvatarController = require("./userAvatarController");
const checktVerifaceteToken = require("./checktVerifaceteToken");
module.exports = {
  usersRegisterController,
  userLoginController,
  userLogoutController,
  userCurrentController,
  userAvatarController,
  checktVerifaceteToken,
};
