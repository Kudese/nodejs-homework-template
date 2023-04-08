const express = require("express");
const {
  userLoginController,
  usersRegisterController,
  userLogoutController,
  userCurrentController,
} = require("../../controllers/auth");
const { checkToken } = require("../../middleware");

const router = express.Router();
router.post("/register", async (req, res) => usersRegisterController(req, res));
router.post("/login", async (req, res) => userLoginController(req, res));
router.post("/logout", checkToken, async (req, res) =>
  userLogoutController(req, res)
);
router.post("/current", checkToken, async (req, res) =>
  userCurrentController(req, res)
);
module.exports = router;
