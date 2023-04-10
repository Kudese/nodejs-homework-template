const  contact  = require("../Schema/contactsModel");

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
  module.exports = updateContact