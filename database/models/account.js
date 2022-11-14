const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user')

const ACCOUNT_TABLE = 'accounts';

const AccountSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  money: {
    allowNull: false,
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  isBlocked: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'is_blocked',
    defaultValue: false
  },
  userId: {
    allowNull: false,
    field: 'user_id',
    type: Sequelize.UUID,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE'
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
    defaultValue: null
  }
}

class Account extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.hasMany(models.Transaction, {
      as: 'transaction',
      foreignKey: 'accountId'
    })
    this.hasMany(models.Transaction, {
      as: 'incomingTransaction',
      foreignKey: 'toAccountId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      paranoid: true,
      tableName: ACCOUNT_TABLE,
      modelName: 'Account',
      timestamps: true
    }
  }
}

module.exports = { ACCOUNT_TABLE, AccountSchema, Account }
