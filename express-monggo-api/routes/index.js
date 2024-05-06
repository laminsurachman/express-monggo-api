var express = require("express");
var router = express.Router();
const Daftar = require("../models/index");
/* GET home page. */
router.post("/create", function (req, res, next) {
  const data = new Daftar({
    nama: req.body.nama,
    alamat: req.body.alamat,
    phone: req.body.phone,
  });
  data
    .save()
    .then((result) => {
      res.status(201).send(data); // Send status code 201 for resource created
    })
    .catch((err) => {
      console.error("Error saving data:", err);
      res.status(500).send({ error: "Internal Server Error" }); // Send status code 500 for internal server error
    });
});

router.get("/read", function (req, res, next) {
  Daftar.find({}).then((result, err) => {
    if (result) res.send(result);
    else err.send(err);
  });
});

router.put("/update", function (req, res, next) {
  Daftar.findByIdAndUpdate(req.body.id, {
    nama: req.body.nama,
    alamat: req.body.alamat,
    phone: req.body.phone,
  }).then((result, err) => {
    if (result) res.send(result);
    else err.send(err);
  });
});
router.delete("/delete", function (req, res, next) {
  Daftar.findByIdAndDelete({
    _id: req.body.id,
  }).then((result, err) => {
    if (result) res.send(result);
    else err.send(err);
  });
});

module.exports = router;
