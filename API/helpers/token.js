const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.secreToken = (email, password, name) => {
  return jwt.sign({ email, password, name }, process.env.ACTIVATION_ACCOUNT, {
    expiresIn: 3 * 4 * 60 * 60,
  });
};
