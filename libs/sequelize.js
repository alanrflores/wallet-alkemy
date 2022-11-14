const { Sequelize } = require('sequelize');
const { development } = require('../config/config');
const { setupModels } = require('../database/models/index')

const USER = encodeURIComponent(development.username);
const PASSWORD = encodeURIComponent(development.password);
const URI = `${development.dialect}://${USER}:${PASSWORD}@${development.host}:${development.port}/${development.database}`

const sequelize = new Sequelize(URI, {
  dialect: development.dialect,
  logging: true,
});

setupModels(sequelize);

module.exports = sequelize;
