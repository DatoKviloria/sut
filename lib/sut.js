'use strict';

const Assert = require('./core/assert.sut')
const colors = require('./core/modules/colors.sut')
const SUTHandler = require('./core/modules/handler.sut')

var Super = (param) =>{
    console.log('\nClass [',param,']','\n');
    console.log(colors.bg.Green,'Passed Test:', colors.bg.Black, Assert.passed.length, '\t', colors.bg.Red,'Failed Test:', colors.bg.Black, Assert.failed.length, '\n')
}

var Class = (sutName, callback) =>{
  if (  typeof sutName !== 'string' )
    SUTHandler('Function Class(sutName, callback) sutName can\'t be '+ typeof sutName, 1)
  else if ( typeof callback === 'function' )
    return console.log('\n'), callback(sutName)
  else
    SUTHandler('Function Class(sutName, callback) Need CallBack Function, Did You Forogt?', 0)
}

var Func = (data, callback) => {
  if ( typeof callback === 'function' )
    return console.log(`\nWatching: ${data}\n-----------------------------------------------------------------------------------`),
          callback(data), console.log(`-----------------------------------------------------------------------------------`)
  else
    SUTHandler('Function Func(data, callback) Need CallBack Function, Did You Forogt?', 0)
}


module.exports = {
  Class,
  Func,
  Super,
  Assert
};