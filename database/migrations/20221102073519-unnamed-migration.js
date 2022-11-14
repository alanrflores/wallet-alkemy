'use strict';
const { RoleSchema, ROLE_TABLE } = require('../models/role');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ROLE_TABLE, RoleSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ROLE_TABLE);
  }
};
