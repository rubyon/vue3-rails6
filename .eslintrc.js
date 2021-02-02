module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/newline-after-import': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'no-console': 0
  },
  globals: {
    __static: true
  }
}
