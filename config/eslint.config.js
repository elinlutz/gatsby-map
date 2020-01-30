/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true
  },

  settings: {
    react: {
      version: 'detect'
    }
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    }
  },

  rules: {
    semi: [2, 'never'],
  },

  plugins: ['react', 'react-hooks'],

  extends: ['zurgbot', 'plugin:react/recommended']
};

/* eslint-enable */
