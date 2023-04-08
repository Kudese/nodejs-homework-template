const  {addContact}  = require("../../models/contacts");
const { shemaPost } = require("../../validate/validateContacts");
const postContactController = async function (req, res) {


    const isValidate = shemaPost.validate(req.body);
    console.log(req.body)
    if (isValidate.error) {
      return res.status(400)
      .json({ message: isValidate.error.message });
    }
    const contactInDB = await addContact(req.body);
    if (contactInDB.error) {
      return res.status(500).json({ message: "DB is Ooopsss" });
    }
    return res.status(201).json(contactInDB);
  };
  module.exports = postContactController