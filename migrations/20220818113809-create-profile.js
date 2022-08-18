'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DiseaseId: {
        type: Sequelize.INTEGER,
        references: {model:'Diseases'}
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {model:'Users'}
      },
      fullName: {
        type: Sequelize.STRING
      },
      bornDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles');
  }
};