const bcryptjs = require("bcryptjs");

const { Professional } = require("../models");

const { generateToken } = require("../helpers/request.helper");

class LoginController {

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await Professional.findOne({ where: { email }, attributes: { include: ["password"] } });
      if (!user) {
        return res.status(400).json({ message: "USER_NOT_FOUND" });
      }
      if (!bcryptjs.compareSync(password, user.password)) {
        return res.status(401).json({ message: "USER_PASSWORD_INCORRECT" });
      }
      user.password = undefined;
      const token = generateToken({ user });
      return res.status(200).json({ data: { token } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

}

module.exports = new LoginController();
