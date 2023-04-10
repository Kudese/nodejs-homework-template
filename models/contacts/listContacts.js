const  contact  = require("../Schema/contactsModel");

const listContacts = async () => {
    const result = await contact.find();
    return result;
  };
  module.exports= listContacts