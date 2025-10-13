module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Listings', [
      {
        name: 'Old Magazines from 1954 USA Published', price: 35, currency: '$', active: true, onHold: false, createdBy: 'system', deletedBy: null, deletedAt: null, updatedBy: 'system', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Cards from 1979 GDR Published', price: 39, currency: '$', active: false, onHold: true, createdBy: 'system', deletedBy: null, deletedAt: null, updatedBy: 'system', createdAt: new Date(), updatedAt: new Date()
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Listings', null, {});
  },
};