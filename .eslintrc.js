module.exports = {
  env: {
    webextensions: true,
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-extra-parens': 0,
    'object-curly-spacing': 0,
    'space-before-function-paren': 0
  }
}
