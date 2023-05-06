module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'error',
    'react/prop-types': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
