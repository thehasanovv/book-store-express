const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("site/catalog");
});

module.exports = router;
