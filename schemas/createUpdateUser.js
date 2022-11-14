const createUpdateUserSchema = {
  firstName: {
    exists: { bail: true, errorMessage: 'First name is required' },
    trim: true,
    isLength: {
      errorMessage: 'First name has invalid length (min 3, max 10)',
      options: { min: 3, max: 10 },
    },
  },
  lastName: {
    exists: { bail: true, errorMessage: 'Last name is required' },
    trim: true,
    isLength: {
      errorMessage: 'Last name has invalid length (min 3, max 10)',
      options: { min: 3, max: 10 },
    },
  },
  email: {
    exists: { bail: true, errorMessage: 'Email is required' },
    trim: true,
    isEmail: {
      errorMessage: 'Email is invalid',
    },
  },
  password: {
    exists: { bail: true, errorMessage: 'Password is required' },
    trim: true,
    isStrongPassword: {
      minLength: 8,
      maxLength: 15,
      minLowecase: 1,
      minUppercase: 1,
      minSymbols: 1,
    },
    errorMessage:
      'Password must be at least 8 characters and must include at least one upper case letter, one lower case letter, one numeric digit, and one special character.',
  },
  image: {
    optional: {
      nulleable: true,
    },
    isURL: {
      errorMessage: 'Invalid URL',
    },
  },
};

module.exports = createUpdateUserSchema;
