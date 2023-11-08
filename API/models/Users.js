// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: true,
//     max: 32,
//     unique: true,
//     index: true,
//     lowercase: true,
//   },

//   username: {
//     type: String,
//     trim: true,
//     required: true,
//   },

//   email: {
//     type: String,
//     trim: true,
//     required: true,
//     lowercase: true,
//     unique: true,
//   },

//   hashed_password: {
//     type: String,
//     required: true,
//   },
//   salt: String,
// });

// userSchema
//   .virtual("password")
//   .set(function (password) {
//     this._password = password;
//     this.salt = this.makeSalt();
//     this.hashed_password = this.encryptPassword(password);
//   })
//   .get(function () {
//     return this._password;
//   });

// userSchema.methods = {
//   authenticate: function (plainText) {
//     return new Promise((resolve, reject) => {
//       bcrypt.compare(plainText, this.hashed_password, (err, isMatch) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(isMatch);
//       });
//     });
//   },
//   encryptPassword: function (password) {
//     if (!password) return "";
//     try {
//       const salt = bcrypt.genSaltSync(10);
//       return bcrypt.hashSync(password, salt);
//     } catch (error) {
//       return " ";
//     }
//   },

//   makeSalt: function () {
//     return Math.round(new Date(), valueOf() * Math.random()) + " ";
//   },
// };

// module.exports = mongoose.model("User", userSchema);
