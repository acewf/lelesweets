var fs = require('fs');
var path = require("path");
var nodeModules = {};
var folder = path.join(__dirname, '../node_modules');
fs.readdirSync(folder)
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = nodeModules;