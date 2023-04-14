const { users } = require("../Schema");
const path = require("path");
const Jimp = require("jimp");
const fs = require("fs");
const userAvatar = async (id, file) => {
  const avatarfile = path.join(file.destination, file.filename);
  try {
    Jimp.read(avatarfile, (_, avatar) => {

      avatar
        .resize(256, 256)
        .quality(60) // set JPEG quality
        .write(`public/avatars/${id}-${file.filename}.jpg`);
    });

    const inDB = await users
      .findByIdAndUpdate(id, {
        avatarURL: `/avatars/${id}-${file.filename}.jpg`,
      })
      .select("+avatarURL -token -__v -subscription -email -_id ");
    fs.unlinkSync(avatarfile);
    return { status: 200, msg: inDB };
  } catch (error) {
    return { status: 500, msg: "Avatar not create" };
  }
};
module.exports = userAvatar;
