const { development, production } = require('../config/config');

const USER = encodeURIComponent(development.username);
const PASSWORD = encodeURIComponent(development.password);
const URI = `${development.dialect}://${USER}:${PASSWORD}@${development.host}:${development.port}/${development.database}`

module.exports = {
  development: {
    url: URI,
    dialect: development.dialect,
  },
  production: {
    url: URI,
    dialect: production.dialect,
  }
}
