const { usersRegister } = require("../../models/auth");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

// const { shemaUser } = require("../../validate");

const usersRegisterControler = async (req, res) => {
  // const isValidate = shemaUser.validate(req.body);
  // console.log(isValidate)
  // if (isValidate.error) {
  //     return res.status(400)
  //     .json({ message: isValidate.error.message });
  //   }
  req.body.password = bcrypt.hashSync(req.body.password, salt);
  const userInDB = await usersRegister(req.body);

  if (userInDB.keyPattern) res.status(409).json("Email in use");

  if (userInDB.error) res.status(500).json({ message: "DB is Ooopsss" });
  userInDB.__v = undefined;
  userInDB.password = undefined;
  userInDB._id = 0;
  console.log(userInDB)
  return res.status(201).json({ user: userInDB });
};
module.exports = usersRegisterControler;
