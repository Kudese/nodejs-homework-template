const   {listContacts} = require("../../models/contacts/");


const getContactControllers = async function (req, res) {
    const list = await listContacts();
    return res.json(list);
  };
  module.exports = getContactControllers