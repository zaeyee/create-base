// 自动导入模块
const files = import.meta.globEager('./*.js')
const directives = Object.keys(files).map(path => files[path].default)

export default directives
