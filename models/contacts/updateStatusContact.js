const  contact  = require("../Schema/contactsModel");

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
  module.exports= updateStatusContact