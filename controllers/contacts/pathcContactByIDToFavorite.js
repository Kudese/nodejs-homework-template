const {updateStatusContact} = require("../../models/contacts");

const pathcContactByIDToFavorite = async function (req, res) {
    console.log("contrileer", req.body)
    if (!req.body) {
    return  res.status(400).json({ message: "missing field favorite" });
    }
    const result = await updateStatusContact(req.params, req.body);
    return res.status(result.status).json(result.msg);
  };
  module.exports = pathcContactByIDToFavorite