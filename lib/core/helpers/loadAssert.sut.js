/*
*  Copyright(c) 2018-2019 David Kviloria <datokviloria@gmail.com>
*  sut@neo
*/

const sut = require('../../sut');
const setPrototypeOf = require('setprototypeof');
const SUTHandler = require('../modules/handler.sut.js');

/*
 * Helper object contaier
*/
sut.__proto__.lib = {};

/*
* Include Function for creating sut.lib.[propertyName]
* Helpers
*/
exports.use = (middleware) =>{

  if(typeof middleware === 'object')
    setPrototypeOf(sut.lib, middleware) || Object.create({});
  else
    SUTHandler('Assertion Middleware must be object based function', 0);
};
