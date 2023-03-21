const express = require("express");

const {
  getContactByIDRout,
  getContactRout,
  postContactRout,
  deleteContactRout,
  putContactRout,
} = require("../contacts/contatcs.helpers");
const router = express.Router();

router.get("/", async (req, res) => getContactRout);

router.get("/:contactId", async (req, res) => getContactByIDRout(req, res));

router.post("/", async (req, res) => postContactRout(req, res));

router.delete("/:contactId", async (req, res) => deleteContactRout(req, res));

router.put("/:contactId", async (req, res) => putContactRout(req, res));

module.exports = router;
