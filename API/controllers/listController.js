const List = require("../models/List");

exports.createList = async (req, res) => {
  // untuk memasukan data
  const { title } = req.body;
  //? cek data apakah sudah terdaftar
  const listExist = await List.findOne({ title });
  if (listExist) {
    // jika sudah terdaftar maka tampilkan String dibawah
    return res.status(400).json({ message: "Title ini sudah digunakan" });
  }
  // jika data belum terdaftar maka buatkan
  const saveList = new List({ title });
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

// Menampilkan satu data
exports.findOne = async (req, res) => {
  // cari masukan parameter data
  const title = req.params;
  // jika ditemukan sebuah data yang sama dengan parameter yang dikirim
  await List.findOne(title)
    // maka tampilkan sebuah data dengan parameter yang sama
    .then((data) => {
      return res.status(200).send(data);
    })
    // jika tidak ada maka tidak ditemukan
    .catch((err) => {
      return res.status(400).json({ message: "Gagal menampilkan sebuah data" });
    });
};

exports.deleteList = async (req, res) => {
  const title = req.params.title;
  // mencari data dan jika ketemu data tersebut maka hapus data
  await List.findOneAndDelete({ title })
    .then((data) => {
      return res.status(200).json({ message: `${title} berhasil dihapus` });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Data gagal dihapus" });
    });
};

exports.editList = async (req, res) => {
  // data query
  try {
    const title = req.params.title;
    console.log(title);
    const data = await List.findOneAndUpdate({ title: title }, { done: true });
    if (!data) {
      return res.status(400).json({ message: `${data} gagal di update` });
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).json({ message: "Terjadi kesalahan" });
  }

  // cari data jika data ada maka update
  // await List.findOneAndUpdate({ title }, req.body)
  //   .then((data) => {
  //     if (!data) {
  //       return res.status(400).json({ message: "Data tidak" });
  //     }
  //     return res.status(200).send(data);
  //   })
  //   .catch((err) => {
  //     return res.status(400).json({ message: "Terjadi kesalahan" });
  //   });
};
