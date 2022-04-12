module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: { uni: true },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    // eslint 推荐规则
    'eslint:recommended',
    // eslint-config-prettier和eslint-plugin-prettier合并配置
    'plugin:prettier/recommended'
  ],
  rules: {}
}
