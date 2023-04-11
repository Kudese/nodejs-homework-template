const { users } = require("../Schema");

const userCurrent = async (id) => {
  try {
    const result = await users.findById(id);
    return {
      status: 200,
      msg: { email: result.email, subscription: result.subscription, avatarURL: result.avatarURL  },
    };
  } catch (error) {
    return {status:500, msg:"DB can not give you profile"}
  }
};
module.exports = userCurrent;
