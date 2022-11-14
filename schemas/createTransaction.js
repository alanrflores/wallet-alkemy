const createTransaction = {
  amount: {
    exists: { bail: true, errorMessage: 'Amount is required' },
    trim: true,
    isFloat: {
      options: {
        locale: 'en-US',
        min: 0.1,
      },
      errorMessage:
        'Invalid value. Only integer or decimal numbers separated by a point are accepted',
    },
  },
  concept: {
    exists: { bail: true, errorMessage: 'Concept is required' },
    trim: true,
    isLength: {
      errorMessage: 'Concept has invalid length (max 25)',
      options: { min: 0, max: 25 },
    },
  },
  category: {
    exists: { bail: true, errorMessage: 'Category is required' },
    // isIn: {
    //   options: ['Expense', 'Income', 'User-transfer'],
    //   errorMessage: 'The allowed values are Expense, Income and User-transfer',
    // },
  },
  email: {
    exists: { bail: true, errorMessage: 'email is required' },
  }
};

module.exports = createTransaction;
