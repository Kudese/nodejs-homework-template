const { contact } = require("../models/contactsModel");

const listContacts = async () => {
  const result = await contact.find();
  return result;
};

const getContactById = async ({ contactId }) => {
  try {
    const result = await contact.findById(contactId).select("-__v");
    return result;
  } catch (error) {
    return { status: 404, msg: "Not fuond contct in DB" };
  }
};

const removeContact = async ({ contactId }) => {
  try {
    const res = await contact.findByIdAndDelete(contactId);
    return { status: 200, msg: `contact ${res._id} deleted` };
  } catch (error) {
    return { status: 404, msg: "Not found contact, not deleted" };
  }
};

const addContact = async (body) => {
  try {
    const result = await contact.create(body);
    return result;
  } catch (error) {
    return error;
  }
};

const updateContact = async ({ contactId }, body) => {
  try {
    await contact.exists({ _id: contactId });
    try {
      await contact.findByIdAndUpdate(contactId, body);
      return { status: 200, msg: "Found and update" };

    } catch (error) {
      return { status: 500, msg: "Ooppps DB is not work?" };
    }
  } catch (err) {
    return { status: 404, msg: "Not found contact in DB, not uodate " };
  }
};

const updateStatusContact = async ({ contactId }, body) => {
  console.log("body", body);
  console.log("id", contactId);
  try {
    await contact.exists({ _id: contactId });
    try {
      await contact.findByIdAndUpdate(contactId, body);
      return { status: 200, msg: "Update favorite status" };
    } catch (error) {
      return { status: 500, msg: "Ooppps DB is not work?" };
    }
  } catch (error) {
    return { status: 404, msg: "Not found contact in DB, not uodate " };
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
