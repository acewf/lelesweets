import { app } from '../../server';

export const addListener = (compilation) => {
  const filename = 'index.js'; // 'index.js';
  const source = compilation.assets[filename].source();

  console.log(source);
  app.get('*', (request, response, next) => {
    const { url } = request;
    if (url.indexOf('build/client') > -1) {
      response
        .status(200)
        .send('function me(){console.log("DAB");}');
    } else {
      next();
    }
  });
};


class CompilerClientPlugin {
  constructor(options) {
    this.options = options;
    this.apply = (compiler) => {
      compiler.hooks.emit.tapAsync('afterCompile', (compilation, callback) => {
        addListener(compilation);
        callback();
      });
    };
  }
}

export default CompilerClientPlugin;
