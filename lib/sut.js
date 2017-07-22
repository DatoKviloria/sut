/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/

'use strict';

/*
* modules
*/
const assert = require('./core/assert.sut')
const colors = require('./core/modules/colors.sut')
const SUTHandler = require('./core/modules/handler.sut')
const setPrototypeOf = require('setprototypeof');

/*
* sut global function takes two argument
* ability: takes infinite functions, based on pipeline strategy
*/
let sut = (sutName) => (...funcs) =>{
  this.test = sutName
  for(let func of funcs){ this.cb = func(this.cb) }
  if ( typeof this.cb === 'function' ) return console.log('\n'), this.cb
  SUTHandler("Something went wrong", 0)
}

/*
* Helper object contaier
*/
sut.__proto__.helper = {};

/*
* Default middleware
* Pipeline Prototype in js
*/
sut.__proto__.pipe = (...funcs) =>{
    return (val) => {
        let value
        for(let func of funcs){
            value = func(value || val)
        }
        return value
    }
}

/*
* middleware uploader for sut.helper object
*/
sut.__proto__.upload = (middleware) =>{
  if(typeof middleware === 'object')
    setPrototypeOf(sut.helper, middleware) || Object.create({});
  else
    SUTHandler("middleware must be object based function", 0)
}

/*
* Default middleware
* for pringing statistic
*/
sut.__proto__.getStats = () => {
  console.log('\n[',this.test,']','\n');
  console.log(colors.bg.Green,'Passed Test:', colors.bg.Black, assert.passed.length, '\t', colors.bg.Red,'Failed Test:', colors.bg.Black, assert.failed.length, '\n')
}


let def = (data, callback) => {
  if ( typeof callback === 'function' )
    console.log(`
      \nFrom: ${data}\n-----------------------------------------------------------------------------------`),
          callback(data)
  else
    SUTHandler('In function def(callback) Need to pass callback function but not found, Did you forogt?', 0)
}

module.exports = {
  def,
  sut,
  assert
};
