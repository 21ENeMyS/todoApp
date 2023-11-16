const { check } = require("express-validator");

exports.signupValidator = [
  check("name").not().isEmpty().withMessage("name tidak boleh kosong"),
  check("email")
    .isEmail()
    .isEmpty()
    .withMessage("email harus benar benar email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("password tidak boleh lebih dari 8 huruf"),
];
