const  {users}  = require("../Schema/");

const usersRegister = async (body) => {
  
  try {
    const result = await users.create(body);
   console.log(result)
    return  result;
  } catch (error) {
    return error
  }
};

module.exports = usersRegister