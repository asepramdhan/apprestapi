"use strict";

module.exports = (app) => {
  const jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route("/tampil").get(jsonku.tampilSemuamahaSiswa);
  app.route("/tampil/:id").get(jsonku.tampilBerdasarkanId);
  app.route("/tambah").post(jsonku.tambahMahasiswa);
  app.route("/ubah").put(jsonku.ubahMahasiswa);
  app.route("/hapus").delete(jsonku.hapusMahasiswa);
  app.route("/tampilmatakuliah").get(jsonku.tampilGroupMatakuliah);
};
