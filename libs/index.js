// My module
const Utils = require('./utils')
var program = require('commander');
const _ = require('lodash')
App.prototype.processArgs = function processArgs(next){
  program
  .version('0.1.0')
  .option('-o, --output <filename>', 'Auth0 Template Directory [config.json]')
  .option('-r, --remove', 'Allow rules removal')
  .parse(process.argv);
  _.merge(this.options,program)
  next()
}

program.on('--help', function(){
  console.log('');
  console.log('Arguments:');
  console.log('');
  console.log('  --output config.json (Output of Auth0 config.json)');
  console.log('  --remove true/false (Deletes rules)');
});

function App(options) {
    this.options = options || {}
    this.utils = new Utils()
  }

  module.exports = App;