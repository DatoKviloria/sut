/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/



/*
* Default helper
* Pipeline Prototype in js
*/
exports.pipe = (...funcs) => {
  return (val) => {
      let value
      for(let func of funcs){
          value = func(value || val)
      }
      return value
  }
}
