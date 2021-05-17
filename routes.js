"use strict";

module.exports = (app) => {
  const jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route("/tampil").get(jsonku.tampilSemuamahaSiswa);
  app.route("/tampil/:id").get(jsonku.tampilBerdasarkanId);
};
