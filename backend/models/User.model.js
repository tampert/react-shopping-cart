const mongoose = require("mongoose");
const shortid = require("shortid");

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
  })
);

module.exports = User;
