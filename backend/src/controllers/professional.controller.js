const bcryptjs = require("bcryptjs");
const { TypeProfessional, Professional } = require("../models");

class ProfessionalController {

  async index(req, res) {
    try {
      const response = await Professional.findAll({
        include: [
          {
            as: "typeProfessional",
            model: TypeProfessional,
          },
        ]
      });
      return res.json({ data: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store({ body }, res) {
    try {

      const user = await Professional.findOne({ where: { email: body.email }})

      if (user) res.status(409).json({ message: "PROFESSIONAL_EMAIL_CONNFLICT" });

      const password = await bcryptjs.hashSync(body.password, 10);
      const response = await Professional.create(
        {
          ...body,
          password,
        }
      );
      return res.status(201).json({ data: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;
      const response = await Professional.findByPk(id);
      if (!response) res.status(404).json({ message: "PROFESSIONAL_NOT_FOUND" });
      return res.status(200).json({ data: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update({ body, params }, res) {
    try {
      const { id } = params;
      const { name, email, password, phone, situation } = body;
      const response = await Professional.findByPk(id);
      if (!response) {
        return res.status(404).json({ message: "PROFESSIONAL_NOT_FOUND" });
      }
      response.name = name;
      response.email = email;
      response.phone = phone;
      response.situation = situation;
      response.password = await bcryptjs.hashSync(password, 10);
      await response.save();
      return res.status(200).json({ data: body });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const response = await Professional.findByPk(id);
      if (!response) res.status(404).json({ message: "PROFESSIONAL_NOT_FOUND" });
      await response.destroy();
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProfessionalController();
