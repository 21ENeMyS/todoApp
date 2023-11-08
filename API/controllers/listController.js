const List = require("../models/List");

exports.createList = async (req, res) => {
  // untuk memasukan data
  const { title, body } = req.body;
  //? cek data apakah sudah terdaftar
  const listExist = await List.findOne({ title: title.toLowerCase() });
  if (listExist) {
    // jika sudah terdaftar maka tampilkan String dibawah
    return res.status(400).json({ message: "Title ini sudah digunakan" });
  }
  // jika data belum terdaftar maka buatkan
  const saveList = new List({ title: title.toLowerCase(), body });
  await saveList
    .save()
    .then((result) => {
      // jika berhasil tampilkan result data
      return res.status(201).send(result);
    })
    .catch((err) => {
      // jika tidak berhasil maka akan gagal
      return res.status(400).json({ message: "Gagal dibuatkan" });
    });
};

exports.findAll = async (req, res) => {
  const list = await List.find();
  res.send(list);
};
