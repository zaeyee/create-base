module.exports = {
  root: true,
  extends: [
    // 标准配置
    'stylelint-config-standard',
    // 基于Recess的属性排序顺序配置
    'stylelint-config-recess-order',
    // 标准的SCSS配置
    'stylelint-config-standard-scss',
    // 推荐的Vue配置
    'stylelint-config-recommended-vue',
    // 关闭所有不必要或可能与Prettier冲突的规则，注意：必须放在最后一项来覆盖其他配置
    'stylelint-config-prettier'
  ],
  rules: {
    // 允许未知规则
    'at-rule-no-unknown': null,
    // 指定alpha值使用数字表示法(小数)
    'alpha-value-notation': 'number',
    // 指定颜色函数使用传统符号隔开(英文逗号)
    'color-function-notation': 'legacy',
    // 允许iconfont缺少通用字体
    'font-family-no-missing-generic-family-keyword': [true, { ignoreFontFamilies: ['iconfont'] }]
  }
}
