require("dotenv").config();

export default {
  port: process.env.DB_PORT,
  url: process.env.DB_URL
};
