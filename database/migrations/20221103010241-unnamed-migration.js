'use strict';
const { TransactionSchema, TRANSACTION_TABLE } = require('../models/transaction');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(TRANSACTION_TABLE, TransactionSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TRANSACTION_TABLE);
  }
};
