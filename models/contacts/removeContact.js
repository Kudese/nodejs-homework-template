const  contact  = require("../Schema/contactsModel");

const removeContact = async ({ contactId }) => {
    try {
      const res = await contact.findByIdAndDelete(contactId);
      return { status: 200, msg: `contact ${res._id} deleted` };
    } catch (error) {
      return { status: 404, msg: "Not found contact, not deleted" };
    }
  };

  module.exports = removeContact