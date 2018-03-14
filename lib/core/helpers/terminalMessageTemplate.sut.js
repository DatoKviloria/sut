/*
*  Copyright(c) 2017-2018 David Kviloria <datokviloria@gmail.com>
*  SutJS Neo
*/

const sut = require('../../sut');
const SUTHandler = require('../modules/handler.sut');
const setPrototypeOf = require('setprototypeof');

/*
* SUT Settings OPTION
*/
sut.__proto__.tpl = {};

/*
* Access: sut.tpl.propertyName
*/
exports.template = (middleware) => {
  if(typeof middleware === 'object') {
    setPrototypeOf(sut.tpl, middleware) || Object.create({});
  } else {
    SUTHandler('Option must be object based function', 0);
  }
};
  





