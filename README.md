# create-base

## 快速构建项目基础框架，支持 vue/uni-app/后台管理[模板](#当前支持的模板)等

> 声明：本工具主要源码来源于[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

### 预置工具

- sass
- eslint 及相关配置
- stylelint 及相关配置
- prettier 及相关配置
- postcss 及相关配置

具体查看对应模板下的 README.md

### 使用方法

With NPM:

```bash
npm create base
```

With Yarn:

```bash
yarn create base
```

With PNPM:

```bash
pnpm create base
```

然后按照提示进行操作！

还可以通过其他命令行选项直接指定要使用的项目名称和模板。例如，要构建 Vite+Vue 项目，请运行：

```bash
# npm 6.x
npm create base@latest base-vue-app --template vue

# npm 7+，需要额外的双破折号：
npm create base@latest base-vue-app -- --template vue

# yarn
yarn create base base-vue-app --template vue

# pnpm
pnpm create base base-vue-app -- --template vue
```

### 仍在更新的模板

- `vue3`：基于 vite+vue3 的模板
- `vue3-ts`：基于 vite+vue3+typescript 的模板
- `uniapp-vue3`：基于 vite+vue3 的 uni-app 模板
- `uniapp-vue3-ts`：基于 vite+vue3+typescript 的 uni-app 模板

### 不再支持的模板

- `vue`：基于 webpack+vue2 的模板
- `uniapp`：基于 webpack+vue2 的 uni-app 模板
- `admin-element`：基于 vite+vue3+Element-plus 的管理后台模板
