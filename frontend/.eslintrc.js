module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'modules',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],

  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    complexity: ['error', 20],
    'generator-star-spacing': 'off',
    'max-len': ['error', 150],
    'no-restricted-properties': 0,
    'prefer-template': 'error',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        printWidth: 120,
        singleQuote: true,
      },
    ],
  },
};
