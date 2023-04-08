const  contact  = require("../Schema/contactsModel");

const addContact = async (body) => {
    try {
      const result = await contact.create(body);
      console.log("result",result)
      return result;
    } catch (error) {
      console.log(error)
      return error;
    }
  };
  module.exports = addContact