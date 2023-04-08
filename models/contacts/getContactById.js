const  contact  = require("../Schema/contactsModel");

const getContactById = async ({ contactId }) => {
    try {
      const result = await contact.findById(contactId).select("-__v");
      return result;
    } catch (error) {
      return { status: 404, msg: "Not fuond contct in DB" };
    }
  };
  module.exports = getContactById