const generateString = require("../config");
const URL = require("../models/url");

async function generateNewShortUrl(req, res) {
  const body = req.body;
  // console.log(req.user);
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = generateString(8);
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", { id: shortID });
}

async function getShortUrl(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  // Check if entry.redirectUrl is a relative URL
  if (
    !entry.redirectUrl.startsWith("http://") &&
    !entry.redirectUrl.startsWith("https://")
  ) {
    // If it's a relative URL, prepend it with "http://"
    entry.redirectUrl = `http://${entry.redirectUrl}`;
  }

  res.redirect(entry.redirectUrl);
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { generateNewShortUrl, getShortUrl, getAnalytics };
