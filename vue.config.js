
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: isProduction?'./':'/',
  
  lintOnSave: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: '8080',
    // https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://129.28.93.189:8090/api/v1-0/',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      // 开启gzip压缩
      const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      // 为生产环境修改配置...
      // 上线压缩去除console等信息
      config.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                compress: {
                    drop_console: true,
                    drop_debugger: false,
                    pure_funcs: ['console.log'] // 移除console
                }
            },
            sourceMap: false,
            parallel: true
        })
    )
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    // modules:false,
    // extract:true,
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
}
