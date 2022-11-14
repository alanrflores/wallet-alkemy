const updateTransaction = {
  concept: {
    exists: { bail: true, errorMessage: 'Concept is required' },
    trim: true,
    isLength: {
      errorMessage: 'Concept has invalid length (max 25)',
      options: { min: 0, max: 25 },
    },
  },
};

module.exports = updateTransaction;
