/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/

/*
* Default helper
* Pipeline Prototype in js access: sut.pipe
*/
exports.pipe = (...funcs) => {
  
  const SUTHandler = require('../modules/handler.sut.js');
  
  return (val) => {
    let value;
    for (let func of funcs) {
      if (func !== undefined)
        value = func(value || val);
      else
        SUTHandler(' In order to execute PIPE, Need to pass arguments, Required: [Function] but given ['+ funcs[0] +']', 0);
    }
    return value;
  };
};
