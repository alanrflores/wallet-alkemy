const loginSchema = {
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
      minLength: 1,
    },
    errorMessage: 'Password must be at least 1 characters',
  },
};

module.exports = loginSchema;
