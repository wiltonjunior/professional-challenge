'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('typeProfessional', [
      {
        id: 1,
        situation: true,
        description: 'Médico',
      },
      {
        id: 3,
        situation: true,
        description: 'Professor',
      },
      {
        id: 2,
        situation: false,
        description: 'Programador',
      }
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('typeProfessional', null, {});
  }
};
