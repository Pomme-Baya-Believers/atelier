module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'react/prop-types': 0,
  },
};
