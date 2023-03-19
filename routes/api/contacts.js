const express = require("express");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../models/contacts");
const Joi = require("joi");
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

const shemaPost = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.number().required()
});

router.post("/", async (req, res, next) => {
 
  const isValidate = shemaPost.validate(req.body);
  if (isValidate.error) {
    return res.status(400).json({ message: isValidate.error.message});
  }
  const contactInDB = await addContact(req.body);

  return res.status(201).json(contactInDB);
});

router.delete("/:contactId", async (req, res, next) => {
  const { status, msg } = await removeContact(req.params);

  res.status(status).json({ message: msg });
});

const shemaPut = Joi.object({
  name: Joi.string().alphanum().min(3).max(30),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.number()
});
router.put("/:contactId", async (req, res, next) => {
  const isValidate = shemaPut.validate(req.body);
  
  const { name, email, phone } = req.body;
  if (!name && !email && !phone &&isValidate.error) {
    return res.status(400).json({ message: isValidate.error.message });
  }

  const { status, msg } = await updateContact(req.params, req.body);

  res.status(status).json({ message: msg });
});

module.exports = router;
