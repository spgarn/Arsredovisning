module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'key-spacing': 2,
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'max-len': [2, 400, 4, { ignoreUrls: true }],
  },
};
