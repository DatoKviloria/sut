/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/

'use strict';

/*
* modules
*/
// const assert = require('./core/assert.sut');
const SUTHandler = require('./core/modules/handler.sut');
const setPrototypeOf = require('setprototypeof');

/*
* Load SutJs helpers
*/
const {
  use,
  pipe,
  stats,
  include,
  template,
  Storage
} = require('./core/helpers/');

/*
* sut global function takes two argument
* ability: takes infinite functions, based on pipeline strategy
*/
const sut = (...funcs) => {

  for(let func of funcs){
    if (func !== undefined)
      this.cb = func(this.cb);
    else
      // THROW warning message
      SUTHandler('Undefined Argument in (MAIN) SUT Pipeline', 0);
  }

  if ( typeof this.cb === 'function' )
    return console.log('\n'), this.cb;
};

/*
 * Helper uploader for sut object
 * for system, not client
*/
sut.__proto__.upload = (...helper) =>{
  
  if(typeof helper === 'object')

    for (let help of helper)
      setPrototypeOf(sut, help) || Object.create({});
    
  else
    SUTHandler('helper must be object based function', 0);
};


/*
 * Def functions is for log test to sconsole
*/
let def = (data, cb) => {
  if ( typeof cb === 'function' )
    console.log(`\nFrom: ${data}\n--------------------------------------------------------------`), cb(data);
  else
    SUTHandler('In function def(callback) Need to pass callback function but not found, Did you forogt?', 0);
};


/*
* marge all defaultHelpers as one object
*/
let defaultHelpers = {
  use,
  pipe,
  include,
  template,
  stats,
  Storage
};

/*
* Upload defaultHelpers object to sut
*/
sut.upload(
  defaultHelpers
);

/*
* Export All Usable stuff
*/
module.exports = {
  def,
  sut,
  // assert
};
