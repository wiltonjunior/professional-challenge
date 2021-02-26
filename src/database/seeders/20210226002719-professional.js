'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('professional', [
      {
        situation: true,
        typeProfessionalId: 1,
        name: 'João da Silva',
        phone: '(84) 9 99468-8583',
        email: 'joaosilva@gmail.com',
        password: '$2y$10$rufkPsvYuC0c7f1.RAoKVOjsxiCIDXZYMa4HtScursvm00Jk/y9Nq',
      },
      {
        situation: true,
        typeProfessionalId: 2,
        name: 'Maria da Silva',
        phone: '(99) 9 9999-9999',
        email: 'maria@gmail.com',
        password: '$2y$10$rufkPsvYuC0c7f1.RAoKVOjsxiCIDXZYMa4HtScursvm00Jk/y9Nq',
      },
      {
        situation: true,
        name: 'Ana da Silva',
        typeProfessionalId: 1,
        email: 'ana@gmail.com',
        phone: '(40) 9 99468-0000',
        password: '$2y$10$rufkPsvYuC0c7f1.RAoKVOjsxiCIDXZYMa4HtScursvm00Jk/y9Nq',
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('professional', null, {});
  }
};
