'use strict';

var SUTerr = '(SUTestJS) Err:'
var SUTwar = '(SUTestJS) War:'

var Assert = {
  passed: [],
  failed: []
};

const colors = {
 fg: {
  Black: "\x1b[30m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m",
  Blue: "\x1b[34m",
  Magenta: "\x1b[35m",
  Cyan: "\x1b[36m",
  White: "\x1b[37m",
  Crimson: "\x1b[38m"
},
 bg: {
  Black: "\x1b[40m",
  Red: "\x1b[41m",
  Green: "\x1b[42m",
  Yellow: "\x1b[43m",
  Blue: "\x1b[44m",
  Magenta: "\x1b[45m",
  Cyan: "\x1b[46m",
  White: "\x1b[47m",
  Crimson: "\x1b[48m"
 }
};

Assert.date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

var SUTMessage = (param, data) => {
    if(param) {
      console.log(colors.bg.Green, "<o>", colors.bg.Black,  colors.fg.White, '\tTime:', Assert.date,  '\tID:', Assert.passed.push(data), ' ', '\tDescription:\t' ,data, colors.bg.Black,  colors.fg.White)
    } else {
      console.log(colors.bg.Red, "<x>", colors.bg.Black,  colors.fg.White, '\tTime:', Assert.date, '\tID:', Assert.failed.push(data), ' ' , '\tDescription:\t' ,data,colors.bg.Black, colors.fg.White)
    }
}

Assert.Equal = (val_1, val_2, data) => {
  if(typeof val_1 == typeof [0,0] && typeof val_2  == typeof [0,0])
      ((val_1.length == val_2.length) ? SUTMessage(true, data) : SUTMessage(false, data) );
  else
      ((val_1 == val_2) ? SUTMessage(true, data) : SUTMessage(false, data) );
}

Assert.ArrayEqual = (val_1, val_2, data) => {
  var add =(a, b) => { return a + b; }
  var sum1 = val_1.reduce(add, 0);
  var sum2 = val_2.reduce(add, 0);
  ((sum1 == sum2) ? SUTMessage(true, data) : SUTMessage(false, data) );
}

Assert.ArrayNotEqual = (val_1, val_2, data) => {
  var add =(a, b) => { return a + b; }
  var sum1 = val_1.reduce(add, 0);
  var sum2 = val_2.reduce(add, 0);
  ((sum1 != sum2) ? SUTMessage(true, data) : SUTMessage(false, data) );
}

Assert.NotEqual = (val_1, val_2, data) => {
  if(typeof val_1 == typeof [0,0] && typeof val_2  == typeof [0,0])
      ((val_1.length != val_2.length) ? SUTMessage(true, data) : SUTMessage(false, data) );
  else
      ((val_1 != val_2) ? SUTMessage(true, data) : SUTMessage(false, data) );
}

Assert.TypeEqual = (val_1, val_2, data) => {
  ((typeof val_1 == typeof val_2) ? SUTMessage(true, data) : SUTMessage(false, data) );
}

Assert.TypeNotEqual = (val_1, val_2, data) => {
  ((typeof val_1 != typeof val_2) ? SUTMessage(true, data)  : SUTMessage(false, data)  );
}

Assert.Fail = (val_1, val_2, data) => {
  ((val_1 < val_2) ? SUTMessage(true, data) : SUTMessage(false, data))
}

Assert.Ok = (val_1, val_2, data) => {
  ((val_1 > val_2) ? SUTMessage(true, data) : SUTMessage(false, data))
}

Assert.TestSatat = () =>{
  console.log(colors.bg.Green,'Passed Test:', colors.bg.Black, Assert.passed.length, '\t', colors.bg.Red,'Failed Test:', colors.bg.Black, Assert.failed.length, '\n')
}

var Init = (param) =>{
    console.log('\nSUTClass [',param,']','\n');
    Assert.TestSatat()
}

var SUTHandler = (text, type) => {
  if(text === undefined || type === undefined)
    console.log('\n'+colors.fg.Yellow+SUTwar, 'SUTHandler Needs `text` And `type` Params', colors.fg.White)
  else
    if( type == 0 || type == '0')
      console.log('\n'+colors.fg.Yellow+SUTwar, text, colors.fg.White)
    else if(type == 1 || type == '1')
      console.log('\n'+colors.fg.Red+SUTwar, text, colors.fg.White)
    else
      console.log('\n'+colors.fg.Yellow+SUTwar, 'Unknown SUTHandler Type: Warr = 0 And Err = 1', colors.fg.White)
}

var SUTClass = (sutName, callback) =>{
  if (  typeof sutName !== 'string' )
    SUTHandler('Function SUTest(sutName, callback) sutName can\'t be '+ typeof sutName, 1)
  else if ( typeof callback === 'function' )
    return console.log('\n'), callback(sutName)
  else
    SUTHandler('Function SUTest(sutName, callback) Need CallBack Function, Did You Forogt?', 0)
}

var SUTFunc = (data, callback) => {
  if ( typeof callback === 'function' )
    return console.log(`\nWatching: ${data}\n-----------------------------------------------------------------------------------`),
          callback(data), console.log(`-----------------------------------------------------------------------------------`)
  else
    SUTHandler('Function SUTSubClass(data, callback) Need CallBack Function, Did You Forogt?', 0)
}

module.exports = {
  Assert,
  SUTClass,
  SUTFunc,
  Init
}
