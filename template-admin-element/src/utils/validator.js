// 是否外链
export const isExternal = path => {
  return /^(https?|mailto|tel):/.test(path)
}
