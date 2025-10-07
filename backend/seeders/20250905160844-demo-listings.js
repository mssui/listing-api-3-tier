module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Listings', [
      { active: true, onHold: false, createdBy: 'system', updatedBy: 'system', createdAt: new Date(), updatedAt: new Date() },
      { active: false, onHold: true, createdBy: 'system', updatedBy: 'system', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Listings', null, {});
  },
};