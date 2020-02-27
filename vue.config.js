
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')
function resolve (dir) {
  console.log(path.join(__dirname, dir))
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: config=>{
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
