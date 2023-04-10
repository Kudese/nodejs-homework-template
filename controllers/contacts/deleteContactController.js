const { removeContact } = require("../../models/contacts");

const deleteContactController = async function (req, res) {
    const { status, msg } = await removeContact(req.params);
    res.status(status).json({ message: msg });
  };

  module.exports= deleteContactController