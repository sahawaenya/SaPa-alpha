'use strict';
const fs = require('fs')
const bcrypt = require('bcrypt')

module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let users = JSON.parse(fs.readFileSync('./data/users.json','utf-8')).map(el=>{
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(el.password, salt)
      return {...el,
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date()}
    })
    return queryInterface.bulkInsert('Users',users);
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users');
  }
};
