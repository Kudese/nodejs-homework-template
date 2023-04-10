const { users } = require("../Schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userLogin = async (res, req) => {
  try {
    const result = await users
      .findOne({ email: res.body.email })
      .select("+password");
    const { email, password, _id } = result;

    const loginChek = await bcrypt.compareSync(res.body.password, password);
    console.log(loginChek);
    if (loginChek) {
      const token = jwt.sign({ id: _id, email: email }, process.env.secretJWT);
      console.log(token);
      try {
        const tokenInDB = await users
          .findByIdAndUpdate(_id, { token })
          .select("+token");
        console.log(tokenInDB);
        return {
          status: 200,
          msg: {
            token: token,
            user: {
              email: tokenInDB.email,
              subscription: tokenInDB.subscription,
            },
          },
        };
      } catch (error) {
        return { status: 500, msg: "DB not save token" };
      }
    } else {
      return { status: 401, msg: "Email or password is wrong " };
    }
  } catch (error) {
    return { status: 500, msg: "Ooppps DB is not work?" };
  }
};

module.exports = userLogin;
