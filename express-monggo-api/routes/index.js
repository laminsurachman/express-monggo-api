var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/create", function (req, res, next) {
  res.send({ code: 1000 });
});
router.get("/read", function (req, res, next) {
  res.send({ code: 1000 });
});
router.put("/update", function (req, res, next) {
  res.send({ code: 1000 });
});
router.delete("/delete", function (req, res, next) {
  res.send({ code: 1000 });
});

module.exports = router;
