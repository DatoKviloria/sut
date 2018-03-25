/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/

'use strict';

const SUTMessage = require('./modules/message.sut');
const convert = require('convert-hrtime');

let assert = {};

/*
* Generete Date
*/
assert.date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');


assert.equal = (val_1, val_2, message) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined) {

    if(typeof val_1 == typeof [0,0] && typeof val_2 === typeof [0,0])
      ((val_1.length == val_2.length) ? SUTMessage(true, `${val_1} == ${val_2}`, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, `${val_1} == ${val_2}`, duration, { explanation: val_1, expected: val_2 } ) );
    else
      ((val_1 == val_2) ? SUTMessage(true, `${val_1} == ${val_2}`, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, `${val_1} == ${val_2}`, duration, { explanation: val_1, expected: val_2 }) );

  } else {

    if (typeof val_1 == typeof [0,0] && typeof val_2 === typeof [0,0])
      ((val_1.length == val_2.length) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 }) );
    else
      ((val_1 == val_2) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 }) );

  }
};

assert.notEqual = (val_1, val_2, message) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if (!message && message == null && message === undefined) {

    if(typeof val_1 == typeof [0,0] && typeof val_2 === typeof [0,0])
      ((val_1.length != val_2.length) ? SUTMessage(true, `${val_1} != ${val_2}`, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, `${val_1} != ${val_2}`, duration, { explanation: val_1, expected: val_2 }) );
    else
      ((val_1 != val_2) ? SUTMessage(true, message, duration) : SUTMessage(false, message, duration) );

  } else {
    if(typeof val_1 == typeof [0,0] && typeof val_2 === typeof [0,0])
      ((val_1.length != val_2.length) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 } ) );
    else
      ((val_1 != val_2) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 } ) );
  }
};

assert.strictEqual = (val_1, val_2, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if (!message && message == null && message === undefined)
    ((val_1 === val_2) ? SUTMessage(true, `${val_1} === ${val_2}`, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, `${val_1} === ${val_2}`, duration, { explanation: val_1, expected: val_2 } ) );
  else
    ((val_1 === val_2) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 } ) );
};

assert.notStrictEqual = (val_1, val_2, message) =>{
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!message && message == null && message === undefined)
    ((val_1 !== val_2) ? SUTMessage(true, `${val_1} !== ${val_2}`, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, `${val_1} !== ${val_2}`, duration, { explanation: val_1, expected: val_2 } ) );
  else
    ((val_1 !== val_2) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 } ) );
};

assert.above = (val_1, val_2, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1 > val_2) ? SUTMessage(true, `${val_1} > ${val_2}`, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, `${val_1} > ${val_2}`, duration, { explanation: val_1, expected: val_2 } ) );
  else
    ((val_1 > val_2) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 }) );
};

assert.below = (val_1, val_2, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1 < val_2) ? SUTMessage(true, `${val_1} < ${val_2}`, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, `${val_1} < ${val_2}`, duration, { explanation: val_1, expected: val_2 }) );
  else
    ((val_1 < val_2) ? SUTMessage(true, message, duration) : SUTMessage(false, message, duration) );
};

assert.true = (val_1, message) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1 === Boolean(1)) ? SUTMessage(true, `${val_1} is True`, duration, { explanation: true, expected: val_1 } ) : SUTMessage(false, `${val_1} is True`, duration, { explanation: true, expected: val_1 }) );
  else
    ((val_1 === Boolean(1)) ? SUTMessage(true, message, duration, { explanation: true, expected: val_1 }) : SUTMessage(false, message, duration, { explanation: true, expected: val_1 }) );
};


assert.notTrue = (val_1, message) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1 !== Boolean(1)) ? SUTMessage(true, `${val_1} is not True`, duration, { explanation: false, expected: val_1 }) : SUTMessage(false, `${val_1} is not True`, duration, { explanation: false, expected: val_1 }) );
  else
    ((val_1 !== Boolean(1)) ? SUTMessage(true, message, duration, { explanation: false, expected: val_1 }) : SUTMessage(false, message, duration, { explanation: false, expected: val_1 }) );
};


assert.false = (val_1, message) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1 === Boolean(0)) ? SUTMessage(true, `${val_1} is False`, duration, { explanation: false, expected: val_1 }) : SUTMessage(false, `${val_1} is False`, duration, { explanation: false, expected: val_1 }) );
  else
    ((val_1 === Boolean(0)) ? SUTMessage(true, message, duration) : SUTMessage(false, message, duration, { explanation: false, expected: val_1 }) );
};

assert.notFalse = (val_1, message) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1 !== Boolean(0)) ? SUTMessage(true, `${val_1} is not False`, duration, { explanation: true, expected: val_1 }) : SUTMessage(false, `${val_1} is not False`, duration, { explanation: true, expected: val_1 }) );
  else
    ((val_1 !== Boolean(0)) ? SUTMessage(true, message, duration, { explanation: true, expected: val_1 }) : SUTMessage(false, message, duration, { explanation: true, expected: val_1 }) );
};


assert.null = (val_1, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1 == null) ? SUTMessage(true, `${val_1} is Null`, duration, { explanation: null, expected: val_1 }) : SUTMessage(false, `${val_1} is Null`, duration, { explanation: null, expected: val_1 }) );
  else
    ((val_1 == null) ? SUTMessage(true, message, duration, { explanation: null, expected: val_1 }) : SUTMessage(false, message, duration, { explanation: null, expected: val_1 }) );
};

assert.notNull = (val_1, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1 != null) ? SUTMessage(true, `${val_1} is not Null`, duration, { explanation: !null, expected: val_1 }) : SUTMessage(false, `${val_1} is not Null`, duration, { explanation: !null, expected: val_1 }) );
  else
    ((val_1 != null) ? SUTMessage(true, message, duration, { explanation: !null, expected: val_2 }) : SUTMessage(false, message, duration, { explanation: !null, expected: val_1 }) );
};


assert.nan = (val_1, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((isNaN(val_1)) ? SUTMessage(true, `${val_1} is Nan`, duration, { explanation: NaN, expected: val_1 }) : SUTMessage(false, `${val_1} is Nan`, { explanation: NaN, expected: val_1 }) );
  else
    ((isNaN(val_1)) ? SUTMessage(true, message, duration, { explanation: NaN, expected: val_1 }) : SUTMessage(false, message, duration, { explanation: NaN, expected: val_1 }) );
};

assert.notNan = (val_1, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!message && message == null && message === undefined)
    ((!isNaN(val_1)) ? SUTMessage(true, `${val_1} is not Nan`, duration, { explanation: !NaN, expected: val_1 }) : SUTMessage(false, `${val_1} is not Nan`, duration, { explanation: !NaN, expected: val_1 }) );
  else
    ((!isNaN(val_1)) ? SUTMessage(true, message, duration, { explanation: !NaN, expected: val_1 }) : SUTMessage(false, message, duration, { explanation: !NaN, expected: val_1 }) );
};

assert.undefined = (val_1, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!message && message == null && message === undefined)
    ((typeof val_1 === 'undefined') ? SUTMessage(true, `${val_1} is undefined`, duration, { explanation: undefined, expected: val_1 }) : SUTMessage(false, `${val_1} is undefined0`, duration, { explanation: undefined, expected: val_1 }) );
  else
    ((typeof val_1 === 'undefined') ? SUTMessage(true, message, duration, { explanation: undefined, expected: val_1 }) : SUTMessage(false, message, duration, { explanation: undefined, expected: val_1 }) );
};

assert.notUndefined = (val_1, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!message && message == null && message === undefined)
    ((typeof val_1 !== 'undefined') ? SUTMessage(true, `${val_1} is not undefined`, duration, { explanation: !undefined, expected: val_1 }) : SUTMessage(false, `${val_1} is not undefined`, duration, { explanation: !undefined, expected: val_1 }) );
  else
    ((typeof val_1 !== 'undefined') ? SUTMessage(true, message, duration, { explanation: !undefined, expected: val_1 }) : SUTMessage(false, message, duration, { explanation: !undefined, expected: val_1 }) );
};

assert.arrayEqual = (val_1, val_2, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  let add = (a, b) => a + b;
  let sum1 = val_1.reduce(add, 0);
  let sum2 = val_2.reduce(add, 0);

  if(!message && message == null && message === undefined)
    ((sum1 == sum2) ? SUTMessage(true, `Sum(${val_1}) == Sum(${val_2})`, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, `Sum(${val_1}) == Sum(${val_2})`, duration, { explanation: val_1, expected: val_2 }) );
  else
    ((sum1 == sum2) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 } ) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 }) );
};

assert.arrayNotEqual = (val_1, val_2, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  let add = (a, b) => a + b;
  let sum1 = val_1.reduce(add, 0);
  let sum2 = val_2.reduce(add, 0);
  if(!message && message == null && message === undefined)
    ((sum1 != sum2) ? SUTMessage(true, `Sum(${val_1}) != Sum(${val_2})`, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, `Sum(${val_1}) != Sum(${val_2})`, duration, { explanation: val_1, expected: val_2 }) );
  else
    ((sum1 != sum2) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 }) );
};


assert.typeEqual = (val_1, val_2, message) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((typeof val_1 == typeof val_2) ? SUTMessage(true, `Type ${val_1}) == Type ${val_2}`, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, `Type ${val_1}) == Type ${val_2}`, duration, { explanation: val_1, expected: val_2 }) );
  else
    ((typeof val_1 == typeof val_2) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 }) );
};


assert.typeNotEqual = (val_1, val_2, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!message && message == null && message === undefined)
    ((typeof val_1 != typeof val_2) ? SUTMessage(true, `Type ${val_1}) != Type ${val_2}`, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, `Type ${val_1}) != Type ${val_2}`, duration, { explanation: val_1, expected: val_2 }) );
  else
    ((typeof val_1 != typeof val_2) ? SUTMessage(true, message, duration, { explanation: val_1, expected: val_2 }) : SUTMessage(false, message, duration, { explanation: val_1, expected: val_2 }) );
};


assert.fail = (val_1, message) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1) ? SUTMessage(false, `${val_1} != false And failed`, duration, { explanation: false, expected: val_1 }) : SUTMessage(true, `${val_1} != false And failed`, duration, { explanation: false, expected: val_1 }));
  else
    ((val_1) ? SUTMessage(false, message, duration, { explanation: false, expected: val_1 }) : SUTMessage(true, message, duration, { explanation: false, expected: val_1 }));
};


assert.ok = (val_1, message) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!message && message == null && message === undefined)
    ((val_1) ? SUTMessage(true, `${val_1} == true And Passed`, duration, { explanation: true, expected: val_1 }) : SUTMessage(false, `${val_1} == true And Passed`, duration, { explanation: true, expected: val_1 }));
  else
    ((val_1) ? SUTMessage(true, message, duration) : SUTMessage(false, message, duration, { explanation: true, expected: val_1 }));
};


module.exports = assert;
