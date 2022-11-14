const { models } = require('../libs/sequelize');
const ctrlAccount = require("./account");
const boom = require('@hapi/boom');
const { encryptPassword } = require("../utils/encryptPassword");
const { Op } = require("sequelize");
module.exports = {
  get: async (id, limit, offset) => {
    const options = {};
    if (limit && offset) {
      options.limit = parseInt(limit);
      options.offset = parseInt(offset);
    };
    const user = await models.User.findByPk(id, {
      include: [
        {
          association: 'account',
          include: ['transaction', 'incomingTransaction'],
          options
        }
      ]
    });
    delete user.dataValues.password
    return user;
  },
  getAll: async (query) => {
    const options = {
      include: ['account']
    };
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = parseInt(limit);
      options.offset = parseInt(offset);
    };
    const users = await models.User.findAll(options);
    return users;
  },
  getByEmail: async (email) => {
    const user = await models.User.findOne({
      where: {
        email
      },
      include: ['account']
    });
    if (user) return user;
    else throw boom.notFound('User not found')
  },
  post: async (schema) => {
    const pass = await encryptPassword(schema.password)
    const [user, created] = await models.User.findOrCreate({
      where: {
        email: schema.email
      },
      defaults: {
        ...schema,
        password: pass,
        roleId: 2
      }
    })
    if (created) {
      //here the axios.post with userId to accounts.post/create to link an account in a new user
      let account = await ctrlAccount.post(user.id);
      return { user, account } // and account;
    }
    else throw boom.forbidden("Email already exists")
  },
  put: async (schema, userId) => {

    // traigo el user
    // verifico que si el email es distinto al que estaba y YA EXISTE en la base de datos, error.
    // si no, modifico y devuelvo lo modificado
    let user = await models.User.findByPk(userId);
    let existingEmail = await models.User.findOne({
      where: {
        email: schema.email,
        id: {
          [Op.notLike]: userId
        }
      }
    })

    if (existingEmail) throw boom.unauthorized("This email already exists");
    if (schema.image === undefined) {

      schema.image = user.image;

    }
    if (typeof (schema.image) === "string") {
      if (schema.image.length < 2) schema.image = user.image;

    }
    if (schema.password.length) {
      if (schema.password === user.password) schema.password = user.password
      else {
        let encryptedPass = schema.password && await encryptPassword(schema.password)
        schema.password = encryptedPass;
      }

    } else schema.password = user.password;
    console.log(schema, "THE SCHEMA")
    await user.update(schema)
    return user
  },
  delete: async (id) => {
    let account = await ctrlAccount.delete(id);

    let user = await models.User.destroy({
      where: {
        id: id
      }
    });
    if (user !== 0 && account !== false) return "deleted"
    else throw boom.notImplemented("This user doesn't exists!");
  }

}
