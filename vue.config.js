// Vue.config.js 配置选项

module.exports = {
  publicPath: "./", //  基本路径
  outputDir: "vue3-web", //  构建时的输出目录
  assetsDir: "assets", //  放置静态资源的目录

  lintOnSave: false, //  是否在保存的时候使用 `eslint-loader` 进行检查。

  productionSourceMap: false, //  是否为生产环境构建生成 source map？

  // 配置 webpack-dev-server 行为。
  devServer: {
    port: 8089,
    host: "0.0.0.0",
    https: false,
    open: false,
    hotOnly: false,
    //配置代理
    proxy: {
      "/sxypcms": {
        target: "http://47.106.175.157:8009",
        ws: true,
        changeOrigin: true,
      },
    },
  },

  css: {
    loaderOptions: {
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "./src/styles/main.scss";`,
      },
    },
  },
};
