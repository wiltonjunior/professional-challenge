module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("professional", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(128),
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      situation: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      typeProfessionalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: "id",
          model: "typeProfessional",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("professional");
  }
};
