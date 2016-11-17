const util = require('util');
const event = require('events');


var SUTerr = '<(SUTestJS)> Error:'

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


Assert.Equal = (val_1, val_2, data) => {
  ((val_1 == val_2) ? console.log(colors.bg.Green, "<o>", colors.bg.Black,  colors.fg.White, '\tID:', Assert.passed.push(data), ' ', '\tDescription:\t' ,data, colors.bg.Black,  colors.fg.White)
  : console.log(colors.bg.Red, "<x>", colors.bg.Black,  colors.fg.White, '\tID:', Assert.failed.push(data), ' ' , '\tDescription:\t' ,data,colors.bg.Black, colors.fg.White) );
}

Assert.notEqual = (val_1, val_2, data) => {
  ((val_1 != val_2) ? console.log(colors.bg.Green, "<o>", colors.bg.Black,  colors.fg.White, '\tID:', Assert.passed.push(data), ' ', '\tDescription:\t' ,data, colors.bg.Black,  colors.fg.White)
  : console.log(colors.bg.Red, "<x>", colors.bg.Black,  colors.fg.White, '\tID:', Assert.failed.push(data), ' ' , '\tDescription:\t' ,data,colors.bg.Black, colors.fg.White) );
}

Assert.typeEqual = (val_1, val_2, data) => {
  ((typeof val_1 == typeof val_2) ? console.log(colors.bg.Green, "<o>", colors.bg.Black,  colors.fg.White, '\tID:', Assert.passed.push(data), ' ', '\tDescription:\t' ,data, colors.bg.Black,  colors.fg.White)
  : console.log(colors.bg.Red, "<x>", colors.bg.Black,  colors.fg.White, '\tID:', Assert.failed.push(data), ' ' , '\tDescription:\t' ,data,colors.bg.Black, colors.fg.White) );
}

Assert.typeNotEqual = (val_1, val_2, data) => {
  ((typeof val_1 != typeof val_2) ? console.log(colors.bg.Green, "<o>", colors.bg.Black,  colors.fg.White, '\tID:', Assert.passed.push(data), ' ', '\tDescription:\t' ,data, colors.bg.Black,  colors.fg.White)
  : console.log(colors.bg.Red, "<x>", colors.bg.Black,  colors.fg.White, '\tID:', Assert.failed.push(data), ' ' , '\tDescription:\t' ,data,colors.bg.Black, colors.fg.White) );
}


Assert.Failed = () =>{
    console.log()
}

Assert.Passed = () =>{
    console.log()
}

Assert.TestSatat = () =>{
  console.log(colors.bg.Green,'Passed Test:', colors.bg.Black, Assert.passed.length, '\t', colors.bg.Red,'Failed Test:', colors.bg.Black, Assert.failed.length)
}


Assert.InitTest = (param) =>{
    console.log(colors.bg.Blue+'\nSUTest Name:', colors.bg.Black , param, '\n');
    Assert.TestSatat()
    //Assert.Passed()
}

var SUTClass = (sutName, callback) =>{

  if (  typeof sutName !== 'string' )
    throw new Error(SUTerr, 'Function SUTest(sutName, callback) sutName can\'t be', typeof sutName)

  else if ( typeof callback === 'function' )
    return console.log('\n'), callback(sutName)

  else
    throw new Error(SUTerr, 'Function SUTest(sutName, callback) Need CallBack Function, Did You Forogt?')

}


module.exports = {
  Assert,
  SUTClass
}
