const { v4: uuidv4 } = require("uuid");
const { sendVarifacateEmail } = require("../../services");
const { users } = require("../Schema/");

const usersRegister = async (body) => {
  const token = `localhost:3000/api/users/verify/:${uuidv4()}`;
  const verifacatData = { verificationToken: token, verify: false };
  try {
    const result = await users.create({ ...body, ...verifacatData });

    const resultVerificate = await sendVarifacateEmail(
      body.email,
      verifacatData.verificationToken
    );

    console.log(resultVerificate);
    return result;
  } catch (error) {
    return { status: 500, message: "DB is Ooopsss" };
  }
};

module.exports = usersRegister;
