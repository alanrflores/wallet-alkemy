const { Model, DataTypes, Sequelize } = require('sequelize');
const { ACCOUNT_TABLE } = require('./account')

const TRANSACTION_TABLE = 'transactions';

const TransactionSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  amount: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  concept: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING
  },
  accountId: {
    allowNull: false,
    field: 'account_id',
    type: Sequelize.UUID,
    references: {
      model: ACCOUNT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE'
  },
  toAccountId: {
    allowNull: false,
    field: 'to_account_id',
    type: Sequelize.UUID,
    references: {
      model: ACCOUNT_TABLE,
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
    field: "deleted_at",
    type: DataTypes.DATE,
    defaultValue: null
  }
}

class Transaction extends Model {
  static associate(models) {
    this.belongsTo(models.Account, { as: 'account' });
    this.belongsTo(models.Account, { as: 'toAccount' });
  }

  static config(sequelize) {
    return {
      sequelize,
      paranoid: true,
      tableName: TRANSACTION_TABLE,
      modelName: 'Transaction',
      timestamps: true
    }
  }
}

module.exports = { TRANSACTION_TABLE, TransactionSchema, Transaction }
