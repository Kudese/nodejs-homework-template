const { users } = require("../Schema");

const userVerifacet = async (token) => {
  console.log("token", token);
  try {
    await users.findOneAndUpdate(
      { verificationToken: `localhost:3000/api/users/verify/${token}` },
      { verificationToken: "null1", verify: true }
    );
    return { status: 200, msg: "Verification email sent" };
  } catch (error) {
    return { status: 500, msg: "DB can`t verificat" };
  }
};
module.exports = userVerifacet;
