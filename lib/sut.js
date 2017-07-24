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
* Load SutJs helpers
*/
const {
  pipe,
  getStats,
  include
} = require('./core/helpers/');

/*
* sut global function takes two argument
* ability: takes infinite functions, based on pipeline strategy
*/
let sut = (...funcs) =>{

  for(let func of funcs){
    this.cb = func(this.cb)
  }

  if ( typeof this.cb === 'function' )
    return console.log('\n'), this.cb
}

/*
 * Helper uploader for sut object
 * for system, not client
*/
sut.__proto__.upload = (helper) =>{
  if(typeof helper === 'object')
    setPrototypeOf(sut, helper) || Object.create({});
  else
    SUTHandler("helper must be object based function", 0)
};


/*
 * Def functions is for log test to sconsole
*/
let def = (data, callback) => {
  if ( typeof callback === 'function' )
    console.log(`
      \nFrom: ${data}\n-----------------------------------------------------------------------------------`),
          callback(data)
  else
    SUTHandler('In function def(callback) Need to pass callback function but not found, Did you forogt?', 0)
};


/*
* marge all defaultHelpers as one object
*/
let defaultHelpers = {
  getStats,
  pipe,
  include
};

/*
* Upload defaultHelpers object to sut
*/
sut.upload(defaultHelpers);


/*
* Export All Usable stuff
*/
module.exports = {
  def,
  sut,
  assert
};
