import Server from './../../src/server';

let didRunAlready = false;

export const compilerData = (compilation) => {
  const filename = 'index.js' //'index.js';
  let source = compilation.assets[filename].source();
  const appEntry = source;
  const { startSSR, app } = Server;
  
  console.log(startSSR, app )
  if (!didRunAlready) {
    didRunAlready = true;
    // startSSR({ appEntry });
  } else {
    // updateServerCode({ appEntry });
  }

  /*
  compilation.chunks.forEach(function (chunk) {
    chunk.files.forEach(function (filename) {
      console.log('FILE NAMES:', filename);
      // var source = compilation.assets[filename].source();
      // console.log(`filename:${filename} | source:`, source);
    });
  })
  */
}

class ServerPlugin {
  constructor(options) {
    this.options = options;
    console.log('[=ServerPlugin=]');
    //  this.listener = app.listen(4000);
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('done', (compilation, callback) => {
      const name = 'server-Bundle';
      callback();
      compilerData(compilation);
    });
  }
}

module.exports = ServerPlugin;
