'use strict';


var SUTMessage = (param, data, time) => {

    const colors = require("./colors.sut")
    const Assert = require("../assert.sut")

    if(param) {
      console.log(colors.bg.Green, "<o>", colors.bg.Black, colors.fg.White, '\tTime:', time ,"ms",  '\tID:', Assert.passed.push(data), ' ', '\tDescription:\t' ,data, colors.bg.Black,  colors.fg.White)
    } else {
      console.log(colors.bg.Red, "<x>", colors.bg.Black, colors.fg.White, '\tTime:', time, "ms",'\tID:', Assert.failed.push(data), ' ' , '\tDescription:\t' ,data, colors.bg.Black, colors.fg.White)
    }
}

module.exports = SUTMessage;
