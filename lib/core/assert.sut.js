'use strict';

const SUTMessage = require('./modules/message.sut')
const clock = require('./modules/perform.sut')

var Assert = {};

Assert.passed = [];
Assert.failed = [];


Assert.date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

var start = clock();


Assert.equal = (val_1, val_2, data) => {
  var duration = clock(start);
  if(!data && data == null && data === undefined)

    if(typeof val_1 == typeof [0,0] && typeof val_2  == typeof [0,0])
        ((val_1.length == val_2.length) ? SUTMessage(true, `${val_1} == ${val_2}`, duration) : SUTMessage(false, `${val_1} == ${val_2}`, duration) );
    else
        ((val_1 == val_2) ? SUTMessage(true, `${val_1} == ${val_2}`, duration) : SUTMessage(false, `${val_1} != ${val_2}`, duration) );
  
  else
    if(typeof val_1 == typeof [0,0] && typeof val_2  == typeof [0,0])
        ((val_1.length == val_2.length) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
    else
        ((val_1 == val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.notEqual = (val_1, val_2, data) => {
 var duration = clock(start);
 if(!data && data == null && data === undefined)

  if(typeof val_1 == typeof [0,0] && typeof val_2  == typeof [0,0])
      ((val_1.length != val_2.length) ? SUTMessage(true, `${val_1} != ${val_2}`, duration) : SUTMessage(false, `${val_1} != ${val_2}`, duration) );
  else
      ((val_1 != val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );

 else
    if(typeof val_1 == typeof [0,0] && typeof val_2  == typeof [0,0])
        ((val_1.length != val_2.length) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
    else
        ((val_1 != val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


Assert.strictEqual = (val_1, val_2, data) =>{
   var duration = clock(start);
   if(!data && data == null && data === undefined)
      ((val_1 === val_2) ? SUTMessage(true, `${val_1} === ${val_2}`, duration) : SUTMessage(false, `${val_1} === ${val_2}`, duration) );
   else
      ((val_1 === val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.notStrictEqual = (val_1, val_2, data) =>{
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((val_1 !== val_2) ? SUTMessage(true, `${val_1} !== ${val_2}`, duration) : SUTMessage(false, `${val_1} !== ${val_2}`, duration) );
    else
      ((val_1 !== val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.above = (val_1, val_2, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((val_1 > val_2) ? SUTMessage(true, `${val_1} > ${val_2}`, duration) : SUTMessage(false, `${val_1} > ${val_2}`, duration) );
    else
      ((val_1 > val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.below = (val_1, val_2, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((val_1 < val_2) ? SUTMessage(true, `${val_1} < ${val_2}`, duration) : SUTMessage(false, `${val_1} < ${val_2}`, duration) );
    else
      ((val_1 < val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.true = (val_1, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
        ((val_1 === Boolean(1)) ? SUTMessage(true, `${val_1} is True`, duration) : SUTMessage(false,  `${val_1} is True`, duration) );
    else
      ((val_1 === Boolean(1)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


Assert.notTrue = (val_1, data) => {
      var duration = clock(start);
      if(!data && data == null && data === undefined)
        ((val_1 !== Boolean(1)) ? SUTMessage(true,  `${val_1} is not True`, duration) : SUTMessage(false,  `${val_1} is not True`, duration) );
      else
        ((val_1 !== Boolean(1)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


Assert.false = (val_1, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((val_1 === Boolean(0)) ? SUTMessage(true,  `${val_1} is False`, duration) : SUTMessage(false, `${val_1} is False`, duration) );
    else
      ((val_1 === Boolean(0)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.notFalse = (val_1, data) => {
     var duration = clock(start);
     if(!data && data == null && data === undefined)
        ((val_1 !== Boolean(0)) ? SUTMessage(true, `${val_1} is not False`, duration) : SUTMessage(false, `${val_1} is not False`, duration) );
     else
       ((val_1 !== Boolean(0)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


Assert.null = (val_1, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((val_1 == null) ? SUTMessage(true, `${val_1} is Null`, duration) : SUTMessage(false, `${val_1} is Null`, duration) );
    else
      ((val_1 == null) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.notNull = (val_1, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((val_1 != null) ? SUTMessage(true, `${val_1} is not Null`, duration) : SUTMessage(false, `${val_1} is not Null`, duration) );
    else
      ((val_1 != null) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


Assert.nan = (val_1, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((isNaN(val_1)) ? SUTMessage(true, `${val_1} is Nan`, duration) : SUTMessage(false, `${val_1} is Nan`, duration) );
    else
      ((isNaN(val_1)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.notNan = (val_1, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((!isNaN(val_1)) ? SUTMessage(true, `${val_1} is not Nan`, duration) : SUTMessage(false, `${val_1} is not Nan`, duration) );
    else
      ((!isNaN(val_1)) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.undefined = (val_1, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((typeof val_1 === 'undefined') ? SUTMessage(true, `${val_1} is undefined`, duration) : SUTMessage(false, `${val_1} is undefined0`, duration) );
    else
      ((typeof val_1 === 'undefined') ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.notUndefined = (val_1, data) => {
    var duration = clock(start);
    if(!data && data == null && data === undefined)
      ((typeof val_1 !== 'undefined') ? SUTMessage(true, `${val_1} is not undefined`, duration) : SUTMessage(false, `${val_1} is not undefined`, duration) );
    else
      ((typeof val_1 !== 'undefined') ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.arrayEqual = (val_1, val_2, data) => {
  var duration = clock(start);
  var add = (a, b) => { return a + b; }
  var sum1 = val_1.reduce(add, 0);
  var sum2 = val_2.reduce(add, 0);

  if(!data && data == null && data === undefined)
    ((sum1 == sum2) ? SUTMessage(true, `Sum(${val_1}) == Sum(${val_2})`, duration) : SUTMessage(false, `Sum(${val_1}) == Sum(${val_2})`, duration) );
  else
    ((sum1 == sum2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};

Assert.arrayNotEqual = (val_1, val_2, data) => {
  var duration = clock(start);
  var add = (a, b) => { return a + b; }
  var sum1 = val_1.reduce(add, 0);
  var sum2 = val_2.reduce(add, 0);
  if(!data && data == null && data === undefined)
    ((sum1 != sum2) ? SUTMessage(true, `Sum(${val_1}) != Sum(${val_2})`, duration) : SUTMessage(false, `Sum(${val_1}) != Sum(${val_2})`, duration) );
  else
    ((sum1 != sum2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


Assert.typeEqual = (val_1, val_2, data) => {
  
  var duration = clock(start);

  if(!data && data == null && data === undefined)
    ((typeof val_1 == typeof val_2) ? SUTMessage(true, `Type ${val_1}) == Type ${val_2}`, duration) : SUTMessage(false, `Type ${val_1}) == Type ${val_2}`, duration) );
  else
    ((typeof val_1 == typeof val_2) ? SUTMessage(true, data, duration) : SUTMessage(false, data, duration) );
};


Assert.typeNotEqual = (val_1, val_2, data) => {

   var duration = clock(start);

  if(!data && data == null && data === undefined)
    ((typeof val_1 != typeof val_2) ? SUTMessage(true, `Type ${val_1}) != Type ${val_2}`, duration)  : SUTMessage(false, `Type ${val_1}) != Type ${val_2}`, duration)  );
  else
    ((typeof val_1 != typeof val_2) ? SUTMessage(true, data, duration)  : SUTMessage(false, data, duration)  );
};


Assert.fail = (val_1, data) => {

  var duration = clock(start);

  if(!data && data == null && data === undefined)
    ((val_1) ? SUTMessage(false, `${val_1} != false And failed`, duration) : SUTMessage(true, `${val_1} != false And failed`, duration))
  else
    ((val_1) ? SUTMessage(false, data, duration) : SUTMessage(true, data, duration))
};



Assert.ok = (val_1, data) => {

  var duration = clock(start);

  if(!data && data == null && data === undefined)    
    ((val_1) ? SUTMessage(true, `${val_1} == true And Passed`, duration) : SUTMessage(false, `${val_1} == true And Passed`, duration))
  else
    ((val_1) ? SUTMessage(true, data, 5) : SUTMessage(false, data, duration))
};


module.exports = Assert;