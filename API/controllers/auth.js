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

// Login
exports.login = async (req, res) => {
  // memasukan email dan password
  const { email, password } = req.body;

  try {
    // cek data user di database
    const user = await User.findOne({ email });
    // jika data tersebut tidak ada makan akan gagal masuk
    if (!user) {
      return res.status(400).json({
        message: `${user} email kamu tidak terdaftar. Silahkan ke halaman register untuk mendaftarkan email mu`,
      });
    }
    // jika data ada di dalam database maka, cek password apakah sama ?
    if (!user.authenticate(password)) {
      return res
        .status(400)
        .json({ message: "Email dan password tidak valid" });
    }
    // jika sama maka kirimkan jsonwebtoken
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // beri cookie selama 1 hari
    res.cookie("token", token, { expiresIn: "1d" });
    // tampilkan data yang sudah Login
    const { _id, username, role, name } = user;
    return res.json({
      token,
      user: {
        _id,
        role,
        username,
        name,
        email,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: errorHandler(error) });
  }
};

// keluar akun
exports.signout = async (req, res) => {
  // hapus cookie dan berhasil keluar
  res.clearCookie("token");
  res.json({ message: "Signout success" });
};
