const mongoose = require("mongoose");

const daftarSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Daftar", daftarSchema);
