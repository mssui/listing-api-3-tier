module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'Asli', email: 'asli@test.com', role: 'admin', listings: null, createdBy: 'system', deletedBy: null, deletedAt: null, updatedBy: 'system', createdAt: new Date(), updatedAt: new Date()
      },
      {
        username: 'Turos', email: 'turos@test.com', role: 'user', listings: null, createdBy: 'system', deletedBy: null, deletedAt: null, updatedBy: 'system', createdAt: new Date(), updatedAt: new Date()
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};