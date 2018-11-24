// import webpackDevMiddleware from 'webpack-dev-middleware/lib/middleware';
import Server from './../../server';

let didRunAlready = false;
const addListener = (compilation) => {
  const { app } = Server;
  if (!didRunAlready) {
    app.get('*', (request, response, next) => {
      const { url } = request;
      if (url.indexOf('build/client') > -1) {
        response
          .status(200)
          .send('function me(){console.log("DAB");}');
        return;
      } else {
        next();
      }
    });
  }
  didRunAlready = true;
}

class CompilerClientPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('afterCompile', (compilation, callback) => {
      callback();
      log({
        title: 'client',
        level: 'info',
        message: 'Building new bundle...'
      });
      addListener(compilation);
    });
  }
}

module.exports = CompilerClientPlugin;