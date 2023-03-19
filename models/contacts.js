const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const BASE_PATH = path.join("models", "contacts.json");
const list = async function () {
  const list = await fs.readFile(BASE_PATH);
  return JSON.parse(list);
};

const listContacts = async () => {
  return await list();
};

const getContactById = async ({ contactId }) => {
  const contacts = await list();
  const result = contacts.filter((contact) => contact.id === contactId);

  return result;
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {
  const contact = await list();
  console.log(contact,"contact")
  const newContact = { ...body, id: uuidv4() };
  console.log(newContact,"newContact")

  const result = [...contact ,newContact];
  console.log(result,"result")

  console.log(result)
  fs.writeFile(BASE_PATH, JSON.stringify(result));
  return newContact;
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
