const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../models/contacts");
const { shemaPost, shemaPut } = require("./validate");

const getContactControllers = async function (req, res) {
  const list = await listContacts();
 return res.json( list );
};

const getContactByIDController = async function (req, res) {
  
  const contact = await getContactById(req.params);
 
  if (contact.length === 0) {
    return res.status(404).json({ message: "Not found " });
  }
  return res.json(contact);
};

const postContactController = async function (req, res) {
  const isValidate = shemaPost.validate(req.body);
  if (isValidate.error) {
    return res.status(400).json({ message: isValidate.error.message });
  }
  const contactInDB = await addContact(req.body);
  console.log(contactInDB,"sada")
  return res.status(201).json(contactInDB);
};

const deleteContactController = async function (req, res) {
  const { status, msg } = await removeContact(req.params);
  res.status(status).json({ message: msg });
};

const putContactController = async function (req, res) {
  const isValidate = shemaPut.validate(req.body);
  const { name, email, phone } = req.body;
  if (!name && !email && !phone && isValidate.error) {
    return res.status(400).json({ message: isValidate.error.message });
  }
  const { status, msg } = await updateContact(req.params, req.body);
  res.status(status).json({ message: msg });
};

module.exports = {
  getContactControllers,
  getContactByIDController,
  postContactController,
  deleteContactController,
  putContactController,
};
