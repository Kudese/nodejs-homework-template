const { getContactById } = require("../../models/contacts");

const getContactByIDController = async function (req, res) {
  const contact = await getContactById(req.params);
  if (contact.status) {
    return res.status(contact.status).json({ massage: contact.msg });
  }
  return res.json(contact);
};
module.exports = getContactByIDController;
