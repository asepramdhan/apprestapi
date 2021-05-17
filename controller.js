"use strict";

const response = require("./res");
const connection = require("./koneksi");

exports.index = (req, res) => {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

// menampilkan semua data mahasiswa
exports.tampilSemuamahaSiswa = (req, res) => {
  connection.query("SELECT * FROM mahasiswa", (error, rows, fileds) => {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
