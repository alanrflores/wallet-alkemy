require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    jwtSecret: process.env.JWT_SECRET,
    email: process.env.EMAIL_ACCOUNT,
    emailPass: process.env.EMAIL_PASS,
    adminEmail: process.env.ADMIN_EMAIL,
    adminPass: process.env.PASSWORD_EMAIL,
    godAccountId: process.env.GOD_ACCOUNT_ID
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    jwtSecret: process.env.JWT_SECRET,
    email: process.env.EMAIL_ACCOUNT,
    emailPass: process.env.EMAIL_PASS,
    adminEmail: process.env.ADMIN_EMAIL,
    adminPass: process.env.PASSWORD_EMAIL,
    godAccountId: process.env.GOD_ACCOUNT_ID
  },
}
