const  {users}  = require("../Schema/");

const usersRegister = async (body) => {
  try {
    const result = await users.create(body);
    return  result;
  } catch (error) {
    return error
  }
};

module.exports = usersRegister