const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
    static associate(models) {
      this.belongsTo(models.TypeProfessional, { foreignKey: "typeProfessionalId", as: "typeProfessional" });
    }
  }
  Professional.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      situation: DataTypes.BOOLEAN,
      typeProfessionalId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Professional",
      tableName: 'professional',
      defaultScope: {
        attributes: { exclude: ["password"] }
      }
    }
  );
  return Professional;
};
