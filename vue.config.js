
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    // 这里写你的样样式类型
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 75 //代表的是 1rem = ？px  这里假设设计稿是 1920px ，那么这里的比例就是 1/10
      })
      .end()
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  },

}
