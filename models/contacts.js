
const { contact } = require("../models/contactsModel");

const listContacts = async () => {
  const result = await contact.find();
  return result;
};

const getContactById = async ({ contactId }) => {
  const result = await contact.findById(contactId).select('-__v');
  return result;
};

const removeContact = async ({ contactId }) => {
  const res = await contact.findByIdAndDelete(contactId);
  if (res === null) {
    return { status: 404, msg: "Not found contact" };
  }
  return { status: 200, msg: `contact deleted` };
};

const addContact = async (body) => {
  const result = await contact.create(body);

  return result;
};

const updateContact = async ({ contactId }, body) => {
  const te = await contact.exists({_id: contactId})
  console.log(te)
  // const result = await contact.findByIdAndUpdate(contactId,body)
  // if (result) {
  //   return { status: 200, msg: "Contact update" };
  // }
  return { status: 404, msg: "Not found" };
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
