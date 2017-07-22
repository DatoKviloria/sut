/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/

'use strict';

const colors = require('./colors.sut')

const SUTerr = '(SUTestJS) Err:'
const SUTwar = '(SUTestJS) War:'

let SUTHandler = (text, type) => {
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


module.exports = SUTHandler
