module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    // eslint 推荐规则
    'eslint:recommended',
    // 使用 eslint-plugin-vue 推荐配置
    'plugin:vue/vue3-recommended',
    // eslint-config-prettier和eslint-plugin-prettier合并配置
    'plugin:prettier/recommended',
    // unplugin-auto-import 自动生成的配置
    './.eslintrc-auto-import.json'
  ],
  rules: {
    // 关闭vue组件名称必须多单词的限制
    'vue/multi-word-component-names': 0
  }
}
