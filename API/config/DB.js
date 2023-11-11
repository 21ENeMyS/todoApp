const mongoose = require("mongoose");
/**
 * * Terdapat error 'Punycode'
 * TODOO cara menyelesaikan error masuk ke dalam 'node_modules/tr46/index.js' terdapat 'const punnyCode = require('punycode')' tambahkan '/' di dalam ('punycode/')
 */

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATABASE}`);
// .then((result) => {
//   console.log("Database Connected");
// })
// .catch((err) => {
//   console.log("gagal");
// });
