const express = require("express");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../models/contacts");

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
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res
      .status(400)
      .json({ message: "missing required name field"});
  }
  const contactInDB = await addContact(req.body);

  return res.status(201).json(contactInDB);
});

router.delete("/:contactId", async (req, res, next) => {
 
   const{ status, msg }= await removeContact(req.params)

  res.status(status).json({ message: msg });
});

router.put("/:contactId", async (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name && !email && !phone) {
    return res
      .status(400)
      .json({ message: "missing fields"});
  }
 
   const {status, msg} = await updateContact(req.params, req.body)

  res.status(status).json({ message: msg });
});

module.exports = router;
