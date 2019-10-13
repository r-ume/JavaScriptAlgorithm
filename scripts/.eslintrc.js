module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 140,
        semi: false,
      },
    ],
    camelcase: 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
  },
}