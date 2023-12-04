// const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
require("dotenv").config();

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.SECRETKEY
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.SECRETKEY);
  } catch (err) {
    return null;
  }
}

module.exports = { setUser, getUser };
