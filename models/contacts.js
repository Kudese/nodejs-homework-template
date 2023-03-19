const fs = require("fs/promises");

const list = async function () {
  const list = await fs.readFile("models/contacts.json");
  return JSON.parse(list);
};

const listContacts = async () => {
  return await list();
};

const getContactById = async ({contactId}) => {
  console.log(contactId)
  const contacts = await list()
  return contacts.filter((contact) => contact.id === contactId
  );
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
