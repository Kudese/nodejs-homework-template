const express = require("express");

const {
  getContactByIDController,
  getContactControllers,
  postContactController,
  deleteContactController,
  putContactController,
} = require("../controllers/contatcs");
const router = express.Router();

router.get("/", async (req, res) => getContactControllers (req, res));

router.get("/:contactId", async (req, res) => getContactByIDController(req, res));

router.post("/", async (req, res) => postContactController(req, res));

router.delete("/:contactId", async (req, res) => deleteContactController(req, res));

router.put("/:contactId", async (req, res) => putContactController(req, res));

module.exports = router;
