// 添加配置
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 配置别名  内部已经配置过一个默认别名 @代表src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',

      }
    }
  },
  css: {
    extract: false
  }
}