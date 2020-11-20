module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'space-before-function-paren': [0, 'never'],
    'no-unused-vars': 'warn',
    'no-undef': 'warn'
  }
}
