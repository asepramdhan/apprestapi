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

// menampikan semua data mahasiswa berdasarkan id
exports.tampilBerdasarkanId = (req, res) => {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",
    [id],
    (error, rows, fileds) => {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menmbahkan data mahasiswa
exports.tambahMahasiswa = (req, res) => {
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)",
    [nim, nama, jurusan],
    (error, rows, fileds) => {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan Data!", res);
      }
    }
  );
};

// mengubah data berdasarkan id
exports.ubahMahasiswa = (req, res) => {
  let id = req.body.id_mahasiswa;
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query(
    "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?",
    [nim, nama, jurusan, id],
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok("berhasil ubah data", res);
      }
    }
  );
};

// menghapus data berdasarkan id
exports.hapusMahasiswa = (req, res) => {
  let id = req.body.id_mahasiswa;

  connection.query(
    "DELETE FROM mahasiswa WHERE id_mahasiswa=?",
    [id],
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menghapus data", res);
      }
    }
  );
};
