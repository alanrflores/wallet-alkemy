const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

module.exports = {

    post: async (schema) => {
        let [role, created] = await models.Role.findOrCreate({  // when DB drops i need to create a quick role, this will be pased on its corresponding file
            where: {
                id: schema.id
            },
            defaults: {
                id: schema.id,
                name: schema.name,
                description: schema.description
            }
        })
        if (created) return role
        else throw boom.badRequest("This role already exist (1 should be client, 2 should be admin)");
    }
}