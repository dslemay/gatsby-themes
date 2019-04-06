module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'jest', 'prettier'],
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'error',
  },
};
