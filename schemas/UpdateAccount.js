const updateAccountSchema = {
  money: {
    trim: true,
    isFloat: {
      options: {
        locale: 'en-US',
      },
      errorMessage:
        'Invalid value. Only integer or decimal numbers separated by a point are accepted',
    },
  },
  id: {
    isUUID: { errorMessage: 'Invalid id' },
  },
};

module.exports = updateAccountSchema;
