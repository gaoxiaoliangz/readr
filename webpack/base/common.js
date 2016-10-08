const vars = require('./variables')

module.exports = {
  resolve: {
    // 这边定义的 root 暂时没用，因为 vs code 里面目前配置的是只使用相对路径
    root: vars.paths.src,
    alias: {
      // 方便在组建里面引用通用的 scss 文件（可能不会太常用）
      // composes 使用的是 webpack resolve 里面的规则
      styles: `${vars.paths.isomorphic}/styles`,
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
