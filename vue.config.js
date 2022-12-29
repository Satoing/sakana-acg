const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
        builderOptions: {
          "appId": "com.example.app",
          "productName": "Sakana~",//项目名，也是生成的安装文件名，即aDemo.exe
          "copyright": "Copyright © 2022",//版权信息
          "directories": {
              "output": "./dist"//输出文件路径，之前编译的默认是dist_electron
          },
          "win": {
              "icon": "/src/static/sakana.png"//这里注意配好图标路径
          }
          // options placed here will be merged with default configuration and passed to electron-builder
        }
    }
  }
})
