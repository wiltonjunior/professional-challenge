const routes = require("express").Router();

const loginRoutes = require("./login.route");
const professionalRoutes = require("./professional.route");
const typeProfessionalRoutes = require("./typeProfessional.route");

routes.use("/auth", loginRoutes);
routes.use("/professional", professionalRoutes);
routes.use("/type-professional", typeProfessionalRoutes);

module.exports = routes;
