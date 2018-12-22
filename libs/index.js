// My module
const Utils = require('./utils')
var program = require('commander');
const _ = require('lodash')
App.prototype.processArgs = function processArgs(next){
  program
  .version('0.1.0')
  .option('-o, --output [config.json]', 'Auth0 Template Directory')
  .parse(process.argv);
  _.merge(this.options,program)
  next()
}

function App(options) {
    this.options = options || {}
    this.utils = new Utils()
  }

  module.exports = App;