const { createVerifaceteToken } = require("../../controllers/auth");
const { sendVarifacateEmail } = require("../../services");
const  {users}  = require("../Schema/");

const usersRegister = async (body) => {

  const verifacatData= createVerifaceteToken(body.email)
  try {
    const result = await users.create({...body, ...verifacatData});
   try {
     const resultVerifactData = await sendVarifacateEmail(body.email,verifacatData.verificationToken)
     console.log(resultVerifactData)
   } catch (error) {
    
   }
    return  result;
  } catch (error) {
    return error
  }
};

module.exports = usersRegister