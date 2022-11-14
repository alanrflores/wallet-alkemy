'use strict';
const { AccountSchema, ACCOUNT_TABLE } = require('../models/account');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ACCOUNT_TABLE, AccountSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ACCOUNT_TABLE);
  }
};
