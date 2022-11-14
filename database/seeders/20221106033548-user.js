const { faker } = require('@faker-js/faker');
const { development } = require('../../config/config')
const { encryptPassword } = require('../../utils/encryptPassword');
const { USER_TABLE } = require('../models/user');
const { ACCOUNT_TABLE } = require('../models/account');
const { TRANSACTION_TABLE } = require('../models/transaction');


module.exports = {
  up: async (queryInterface) => {
    const users = []
    const accounts = []
    const password = await encryptPassword(development.adminPass)
    const usersPassword = await encryptPassword("root")
    const admin = {
      id: 'b5a928fd-f1be-47d5-b9ec-e448a1b84848',
      first_name: 'John',
      last_name: 'Doe',
      email: development.adminEmail,
      password: password,
      role_id: 1
    }
    const god = {
      id: 'b5a928fd-f1be-47d5-b9ec-e448a1b84849',
      first_name: 'John',
      last_name: 'Doe',
      email: 'godAccount@cloud.com',
      password: password,
      role_id: 3
    }
    const godAccount = {
      id: development.godAccountId,
      money: 0,
      is_blocked: false,
      user_id: god.id
    }
    const adminAccount = {
      id: 'b5a928fd-f1be-47d5-b9ec-e448a1b84847',
      money: 0,
      is_blocked: false,
      user_id: admin.id
    }

    for (let index = 0; index < 100; index++) {
      const created_at = faker.date.recent()
      const user = {
        id: faker.datatype.uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: usersPassword,
        image: "https://res.cloudinary.com/leo-echenique/image/upload/v1668279011/1667812544dinosaur-beast_ug4zwx.svg",
        role_id: 2,
        created_at,
        updated_at: created_at
      }
      const account = {
        id: faker.datatype.uuid(),
        money: faker.finance.amount(),
        is_blocked: faker.datatype.boolean(),
        user_id: user.id,
        created_at: created_at,
        updated_at: created_at
      };
      users.push(user);
      accounts.push(account);
    }

    await queryInterface.bulkInsert(USER_TABLE, [
      admin, god, ...users
    ]);
    await queryInterface.bulkInsert(ACCOUNT_TABLE, [
      godAccount, adminAccount, ...accounts
    ])

    const transactions = [];

    for (const account of accounts) {
      for (let index = 0; index < Math.floor(Math.random()*30); index++) {
        const createdAt = faker.date.recent()
        const transaction = {
          id: faker.datatype.uuid(),
          amount: faker.finance.amount(),
          concept: faker.lorem.word(),
          category: faker.helpers.arrayElement(["Income", "Expense", "User-transfer"]),
          account_id: account.id,
          to_account_id: accounts[Math.floor(Math.random()*100)].id,
          created_at: createdAt,
          updated_at: createdAt
        }
        transactions.push(transaction);
      }
    }

    return queryInterface.bulkInsert(TRANSACTION_TABLE, [
      ...transactions
    ])
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete(USER_TABLE, {}, null)
  }
};
