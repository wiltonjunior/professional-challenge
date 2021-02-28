const { TypeProfessional } = require("../models");

class TypeProfessionalController {
  async index(req, res) {
    /*
      #swagger.tags = ['TypeProfessional']
      #swagger.responses[200] = {
        description: "Get all professional",
        schema: { $ref: "#/definitions/getTypeProfessional" }
      }
     */
    try {
      const response = await TypeProfessional.findAll();
      return res.json({ data: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    /*
      #swagger.tags = ['TypeProfessional']
      #swagger.responses[200] = {
        description: "Create professional",
        schema: { $ref: "#/definitions/oneTypeProfessional" }
      }
    */
    try {
      const { description, phone, situation } = req.body;
      const response = await TypeProfessional.create({ description, phone, situation });
      return res.status(201).json({ data: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    /*
      #swagger.tags = ['TypeProfessional']
      #swagger.responses[200] = {
        description: "Get one professional",
        schema: { $ref: "#/definitions/oneTypeProfessional" }
      }
    */
    try {
      const { id } = req.params;
      const response = await TypeProfessional.findByPk(id);
      if (!response) res.status(404).json({ message: "TYPE_PROFESSIONAL_NOT_FOUND" });
      return res.status(200).json({ data: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
     /*
      #swagger.tags = ['TypeProfessional']
      #swagger.responses[200] = {
        description: "Update by id professional",
        schema: { $ref: "#/definitions/oneTypeProfessional" }
      }
    */
    try {
      const { id } = req.params;
      const { description, phone, situation } = req.body;
      const response = await TypeProfessional.findByPk(id);
      if (!response) {
        return res.status(404).json({ message: "TYPE_PROFESSIONAL_NOT_FOUND" });
      }
      response.description = description;
      response.phone = phone;
      response.situation = situation;
      await response.save();
      return res.status(200).json({ data: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    /*
      #swagger.tags = ['TypeProfessional']
      #swagger.responses[200] = ok
    */
    try {
      const { id } = req.params;
      const response = await TypeProfessional.findByPk(id);
      if (!response) res.status(404).json({ message: "TYPE_PROFESSIONAL_NOT_FOUND" });
      await response.destroy();
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new TypeProfessionalController();
