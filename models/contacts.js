const fs = require("fs/promises");
const { v4: uuidv4 } = require('uuid');
const list = async function () {
  const list = await fs.readFile("models/contacts.json");
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
 const contact = {...body, id: uuidv4()}
 fs.writeFile("models/contacts.json",contact, )
return contact
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
