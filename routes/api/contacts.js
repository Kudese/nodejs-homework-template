const express = require("express");
const { listContacts, getContactById } = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const list = await listContacts();
  res.json({ list });
});

router.get("/:contactId", async (req, res, next) => {
  const contact = await getContactById(req.params);
  if (contact.length === 0) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.json(contact);
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message post" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message delete" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message put" });
});

module.exports = router;
