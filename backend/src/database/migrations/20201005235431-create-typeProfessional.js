module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("typeProfessional", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      situation: {
        type: Sequelize.BOOLEAN
      },
      phone: {
        type: Sequelize.STRING(64)
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
    await queryInterface.dropTable("typeProfessional");
  }
};
