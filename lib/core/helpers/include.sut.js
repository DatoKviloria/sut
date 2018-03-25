/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/

const sut = require('../../sut');
const setPrototypeOf = require('setprototypeof');
const SUTHandler = require('../modules/handler.sut.js');

/*
 * Clienthelper setter for sut.hepler object
 * for client
 * access vie : sut.helper.[methodname]
*/

/*
 * Helper object contaier
*/
sut.__proto__.helper = {};

/*
* Include Function for creating sut.helper.[methodname]
* Helpers
*/
exports.include = (middleware) =>{

  if(typeof middleware === 'object')
    setPrototypeOf(sut.helper, middleware) || Object.create({});
  else
    SUTHandler('middleware must be object based function', 0);

};
