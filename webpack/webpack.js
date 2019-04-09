#!/usr/bin/env node
import webpack from 'webpack';
import webpackConfig from './webpack.config';

process.exitCode = 0;

require('@babel/core').transform('code');

const configs = webpackConfig();
let finishedCompilations = 0;
if (configs.length >= 0) {
  const listOfPack = configs.map((config) => {
    const compiler = webpack(config);
    compiler.run((...args) => {
      const stats = args[1];
      // const { name } = stats.compilation;
      finishedCompilations += 1;
      if (configs.length === finishedCompilations) {
        // process.exit();
      }
    });

    compiler.hooks.done.tap('WebpackInfo', (compilation) => {
      // const compilationName = compilation.name ? compilation.name : '';
      // console.log(`Compilation ${compilationName} finished`);
      return compilation;
    });
    return compiler;
  });
} else {
  const compiler = webpack(configs);
  compiler.run((id) => {
    console.log('[compiler]', id);
    process.exit();
  });
}


// process.exitCode = 1;
