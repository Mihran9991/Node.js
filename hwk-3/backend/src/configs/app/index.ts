require("dotenv").config();

export default {
  port: Number(process.env.PORT),
  auth: {
    jwt_secret: String(process.env.JWT_SECRET)
  }
};
