const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TypeProfessional extends Model {}

  TypeProfessional.init(
    {
      phone: DataTypes.STRING,
      situation: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TypeProfessional",
      tableName: 'typeProfessional',
    }
  );
  
  return TypeProfessional;
};
