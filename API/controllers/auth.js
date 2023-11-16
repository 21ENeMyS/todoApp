const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require("express-jwt");
const _ = require("lodash");
const createToken = require("../helpers/token");
const shortId = require("shortid");
const { errorHandler } = require("../helpers/dbHandler");

exports.signup = async (req, res) => {
  // user mamasukan data
  const { email, password, name } = req.body;
  try {
    // cek apakah email sudah terdaftar
    const userEmail = await User.findOne({
      email: req.body.email.toLowerCase(),
    });
    if (userEmail) {
      return res.status(400).json({ message: `${email} sudah dibuatkan` });
    }
    // generate username menjadi unique code
    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;
    // buatkan data tersebut dan simpan kedalam database
    const newUser = new User({ email, password, name, username, profile });
    newUser.save().then((data) => {
      return res.status(200).json(data);
    });
  } catch (error) {
    // error
    return res.status(400).json({ message: errorHandler(error) });
  }
};
