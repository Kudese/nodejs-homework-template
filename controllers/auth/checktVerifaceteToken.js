const { userVerifacet } = require("../../models/auth");

const checktVerifaceteToken = async (req, res) => {
  const result = await userVerifacet(req.params.verificationToken);
  return res.status(result.status).json(result.msg);
};

module.exports = checktVerifaceteToken;
