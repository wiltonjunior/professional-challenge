const jwt = require("jsonwebtoken");

const generateToken = (params) => {
  return jwt.sign(params, process.env.SECRET_KEY, { expiresIn: "1d" });
};

module.exports = {
  generateToken
};
