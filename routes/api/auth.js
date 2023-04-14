const express = require("express");
const {
  userLoginController,
  usersRegisterController,
  userLogoutController,
  userCurrentController,
  userAvatarController,
} = require("../../controllers/auth");
const { checkToken, gravatarMiddleware } = require("../../middleware");
const avatarWiddleware = require("../../middleware/avatarMiddleware");

const router = express.Router();
router.post("/register", gravatarMiddleware, async (req, res) =>
  usersRegisterController(req, res)
);
router.post("/login", async (req, res) => userLoginController(req, res));
router.post("/logout", checkToken, async (req, res) =>
  userLogoutController(req, res)
);
router.post("/current", checkToken, async (req, res) =>
  userCurrentController(req, res)
);
router.patch("/avatar", checkToken, avatarWiddleware, async (req, res) =>
  userAvatarController(req, res)
);
module.exports = router;

