module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 'next',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended', 'prettier'],
  ignorePatterns: ['/*.*', 'android/', 'ios/', 'assets/', 'node_modules/'],
  rules: {
    eqeqeq: 'error',
    'no-console': 'warn',
    'prefer-const': 'warn',
    'no-var': 'error',
    'no-self-compare': 'warn',
    'func-name-matching': 'error',
    'no-inline-comments': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/prefer-includes': 1,
    '@typescript-eslint/require-await': 'off',
  },
};
