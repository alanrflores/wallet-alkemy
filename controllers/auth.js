const { getByEmail } = require('./users');
const boom = require('@hapi/boom');
const { comparePassword } = require('../utils/encryptPassword');
const { createJWT } = require('../utils/createJwt');

module.exports = {
  login: async (email, password) => {
    const user = await getByEmail(email);
    const match = await comparePassword(password, user.password);
    if (match) {
      const payload = {
        sub: user.id,
        role: user.roleId,
      };
      const token = createJWT({ payload });

      return { token };
    } else {
      throw boom.unauthorized('Invalid password');
    }
  },
};
