const createUpdateRoleSchema = {
  name: {
    exists: { bail: true, errorMessage: 'Name is required' },
    trim: true,
    isLength: {
      errorMessage: 'Name has invalid length (min 2, max 12)',
      options: { min: 2, max: 12 },
    },
  },
  description: {
    exists: { bail: true, errorMessage: 'Description is required' },
    trim: true,
    isLength: {
      errorMessage: 'Description has invalid length (min 3, max 50)',
      options: { min: 3, max: 50 },
    },
  },
};

module.exports = createUpdateRoleSchema;
