const { updateContact } = require("../../models/contacts");
const { shemaPut } = require("../../validate/validateContacts");

const putContactController = async function (req, res) {
    const isValidate = shemaPut.validate(req.body);
    const { name, email, phone } = req.body;
    if (!name && !email && !phone && isValidate.error) {
      return res.status(400).json({ message: isValidate.error.message });
    }
    const { status, msg } = await updateContact(req.params, req.body);
    res.status(status).json({ message: msg });
  };
  module.exports = putContactController