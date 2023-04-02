

babel-core 的作用 是把 js 代码分析成 ast ,方便各个插件分析语法进行相应的处理
style-loader 的作用是将 CSS 代码插入到 DOM 中,
css-loader是帮助webpack打包处理css文件的工具;
@babel/preset-env  兼容语法


"serve": "webpack --mode=development --watch" ,  
mode:1 development 开发模式 2 production 生产模式
watch 监听变化就运行


    //当他匹配到了文件名，则用相应的loader转换

      { test:/\.s[ca]ss$/,use:['style-loader','css-loader','scss-loader']} ,// 后面的loader先用的

      // {test:/\.vue$/, use:[{loader:'vue-loader',option:{}},{}]}, // 多个loader 写法
   // { test: /\.(png|jpe?g|gif|svg|webp)$/,
      //   use:{
      //     loader:'file-loader',
      //     option:{
      //       esModule:false
      //     }
      //   }
      // }
            presets:['@babel/preset-env']  // 预设
