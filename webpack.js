#!/usr/bin/env node
process.exitCode = 0;

require("@babel/core").transform("code");

import webpack,{ ProgressPlugin} from 'webpack';
import webpackConfig from './webpack.config';

const configs = webpackConfig();
/* const progressPluging = new ProgressPlugin((percentage, message, ...args) => {
  //webpackBar.update(200*percentage);
}); */

if(configs.length>=0){
  const listOfPack = configs.map(config=> {
    const compiler = webpack(config);
    // progressPluging.apply(compiler);
    compiler.run((...args)=>{
      const stats = args[1];
      const { name } = stats.compilation;
      console.log('[compiler]',name);
      // console.log(stats.compilation);
    })

    /* compiler.hooks.done.tap("WebpackInfo", compilation => {
      const compilationName = compilation.name ? compilation.name : "";
      console.log("\nCompilation " + compilationName + " finished\n");
    }); */
  });
} else {
  const compiler = webpack(configs);
  progressPluging.apply(compiler);
  compiler.run((id)=>{
    console.log('[compiler]',id);
  })
}


// process.exitCode = 1;