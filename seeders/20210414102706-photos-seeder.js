"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("photos", [
      {
        id: 1,
        photo: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /*  */
  },
};
