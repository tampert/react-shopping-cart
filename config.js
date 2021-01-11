const dotenv = require("dotenv");
dotenv.config();

const config = {
  JWT_SECRET: process.env.JWT_SECRET,
  MONGODB_URL: process.env.MONGODB_URL,
};

module.exports = config;
