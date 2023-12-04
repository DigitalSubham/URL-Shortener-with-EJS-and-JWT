const express = require("express");
const router = express.Router();
const {
  generateNewShortUrl,
  getShortUrl,
  getAnalytics,
} = require("../controllers/url");

router.post("/", generateNewShortUrl);
router.get("/:shortId", getShortUrl);
router.get("/analytics/:shortId", getAnalytics);

module.exports = router;
