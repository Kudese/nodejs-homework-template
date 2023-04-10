const { shemaPost, shemaPut } = require("./validateContacts");
const {shemaUser} = require("./validateUsers");

module.exports = {
  shemaPost,
  shemaPut,
  shemaUser,
};
