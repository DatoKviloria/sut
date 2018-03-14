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


assert.equal = (val_1, val_2, data) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;


  if(!data && data == null && data === undefined) {

    if(typeof val_1 == typeof [0,0] && typeof val_2 === typeof [0,0])
      ((val_1.length == val_2.length) ? SUTMessage(true, `${val_1} == ${val_2}`, duration) : SUTMessage(false, `${val_1} == ${val_2}`, duration) );
    else
      ((val_1 == val_2) ? SUTMessage(true, `${val_1} == ${val_2}`, duration) : SUTMessage(false, `${val_1} == ${val_2}`, duration) );

  } else {

    if (typeof val_1 == typeof [0,0] && typeof val_2 === typeof [0,0])
      ((val_1.length == val_2.length) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
    else
      ((val_1 == val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );

  }
};

assert.notEqual = (val_1, val_2, data) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if (!data && data == null && data === undefined) {

    if(typeof val_1 == typeof [0,0] && typeof val_2 === typeof [0,0])
      ((val_1.length != val_2.length) ? SUTMessage(true, `${val_1} != ${val_2}`, duration) : SUTMessage(false, `${val_1} != ${val_2}`, duration) );
    else
      ((val_1 != val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );

  } else {
    if(typeof val_1 == typeof [0,0] && typeof val_2 === typeof [0,0])
      ((val_1.length != val_2.length) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
    else
      ((val_1 != val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
  }
};

assert.strictEqual = (val_1, val_2, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if (!data && data == null && data === undefined)
    ((val_1 === val_2) ? SUTMessage(true, `${val_1} === ${val_2}`, duration) : SUTMessage(false, `${val_1} === ${val_2}`, duration) );
  else
    ((val_1 === val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.notStrictEqual = (val_1, val_2, data) =>{
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!data && data == null && data === undefined)
    ((val_1 !== val_2) ? SUTMessage(true, `${val_1} !== ${val_2}`, duration) : SUTMessage(false, `${val_1} !== ${val_2}`, duration) );
  else
    ((val_1 !== val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.above = (val_1, val_2, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1 > val_2) ? SUTMessage(true, `${val_1} > ${val_2}`, duration) : SUTMessage(false, `${val_1} > ${val_2}`, duration) );
  else
    ((val_1 > val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.below = (val_1, val_2, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1 < val_2) ? SUTMessage(true, `${val_1} < ${val_2}`, duration) : SUTMessage(false, `${val_1} < ${val_2}`, duration) );
  else
    ((val_1 < val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.true = (val_1, data) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1 === Boolean(1)) ? SUTMessage(true, `${val_1} is True`, duration) : SUTMessage(false, `${val_1} is True`, duration) );
  else
    ((val_1 === Boolean(1)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


assert.notTrue = (val_1, data) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1 !== Boolean(1)) ? SUTMessage(true, `${val_1} is not True`, duration) : SUTMessage(false, `${val_1} is not True`, duration) );
  else
    ((val_1 !== Boolean(1)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


assert.false = (val_1, data) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1 === Boolean(0)) ? SUTMessage(true, `${val_1} is False`, duration) : SUTMessage(false, `${val_1} is False`, duration) );
  else
    ((val_1 === Boolean(0)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.notFalse = (val_1, data) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1 !== Boolean(0)) ? SUTMessage(true, `${val_1} is not False`, duration) : SUTMessage(false, `${val_1} is not False`, duration) );
  else
    ((val_1 !== Boolean(0)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


assert.null = (val_1, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1 == null) ? SUTMessage(true, `${val_1} is Null`, duration) : SUTMessage(false, `${val_1} is Null`, duration) );
  else
    ((val_1 == null) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.notNull = (val_1, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1 != null) ? SUTMessage(true, `${val_1} is not Null`, duration) : SUTMessage(false, `${val_1} is not Null`, duration) );
  else
    ((val_1 != null) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


assert.nan = (val_1, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((isNaN(val_1)) ? SUTMessage(true, `${val_1} is Nan`, duration) : SUTMessage(false, `${val_1} is Nan`, duration) );
  else
    ((isNaN(val_1)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.notNan = (val_1, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!data && data == null && data === undefined)
    ((!isNaN(val_1)) ? SUTMessage(true, `${val_1} is not Nan`, duration) : SUTMessage(false, `${val_1} is not Nan`, duration) );
  else
    ((!isNaN(val_1)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.undefined = (val_1, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!data && data == null && data === undefined)
    ((typeof val_1 === 'undefined') ? SUTMessage(true, `${val_1} is undefined`, duration) : SUTMessage(false, `${val_1} is undefined0`, duration) );
  else
    ((typeof val_1 === 'undefined') ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.notUndefined = (val_1, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!data && data == null && data === undefined)
    ((typeof val_1 !== 'undefined') ? SUTMessage(true, `${val_1} is not undefined`, duration) : SUTMessage(false, `${val_1} is not undefined`, duration) );
  else
    ((typeof val_1 !== 'undefined') ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.arrayEqual = (val_1, val_2, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  let add = (a, b) => a + b;
  let sum1 = val_1.reduce(add, 0);
  let sum2 = val_2.reduce(add, 0);

  if(!data && data == null && data === undefined)
    ((sum1 == sum2) ? SUTMessage(true, `Sum(${val_1}) == Sum(${val_2})`, duration) : SUTMessage(false, `Sum(${val_1}) == Sum(${val_2})`, duration) );
  else
    ((sum1 == sum2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

assert.arrayNotEqual = (val_1, val_2, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  let add = (a, b) => a + b;
  let sum1 = val_1.reduce(add, 0);
  let sum2 = val_2.reduce(add, 0);
  if(!data && data == null && data === undefined)
    ((sum1 != sum2) ? SUTMessage(true, `Sum(${val_1}) != Sum(${val_2})`, duration) : SUTMessage(false, `Sum(${val_1}) != Sum(${val_2})`, duration) );
  else
    ((sum1 != sum2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


assert.typeEqual = (val_1, val_2, data) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((typeof val_1 == typeof val_2) ? SUTMessage(true, `Type ${val_1}) == Type ${val_2}`, duration) : SUTMessage(false, `Type ${val_1}) == Type ${val_2}`, duration) );
  else
    ((typeof val_1 == typeof val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


assert.typeNotEqual = (val_1, val_2, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;
  if(!data && data == null && data === undefined)
    ((typeof val_1 != typeof val_2) ? SUTMessage(true, `Type ${val_1}) != Type ${val_2}`, duration) : SUTMessage(false, `Type ${val_1}) != Type ${val_2}`, duration) );
  else
    ((typeof val_1 != typeof val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


assert.fail = (val_1, data) => {
  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1) ? SUTMessage(false, `${val_1} != false And failed`, duration) : SUTMessage(true, `${val_1} != false And failed`, duration));
  else
    ((val_1) ? SUTMessage(false, data, duration) : SUTMessage(true, data, duration));
};


assert.ok = (val_1, data) => {

  let start = process.hrtime();
  let duration = convert(process.hrtime(start)).milliseconds;

  if(!data && data == null && data === undefined)
    ((val_1) ? SUTMessage(true, `${val_1} == true And Passed`, duration) : SUTMessage(false, `${val_1} == true And Passed`, duration));
  else
    ((val_1) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration));
};


module.exports = assert;
