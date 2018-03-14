/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/

'use strict';

let SUTMessage = (param, data, time) => {
  
  const sut = require('../../sut');
  const colors = require('./colors.sut');
  const setPrototypeOf = require('setprototypeof');
  const { Storage } = require('../helpers');
  const sutStorage = Storage;

  if(param) {

    if(!sut.tpl.removeBackgroundColor) {
      sutStorage.set('passed', data);
      console.log(colors.bg.Green, (sut.tpl.passed) ? sut.tpl.passed + ' ' : '<o>', colors.bg.Black, colors.fg.White, '\tTime:', time ,'ms', '\tDescription:\t' ,data, colors.bg.Black, colors.fg.White);
    }else{
      sutStorage.set('passed', data);
      console.log((sut.tpl.passed) ? sut.tpl.passed + ' ' : '<o>', '\tTime:', time ,'ms', '\tDescription:\t' , data);
    }
  
  } // end if

  else {
    
    if (!sut.tpl.removeBackgroundColor) {
      sutStorage.set('failed', data);
      console.log(colors.bg.Red, (sut.tpl.failed) ? sut.tpl.failed + ' ' : '<x>', colors.bg.Black, colors.fg.White, '\tTime:', time, 'ms', '\tDescription:\t' ,data, colors.bg.Black, colors.fg.White);
    } else {
      sutStorage.set('failed', data);
      console.log((sut.tpl.failed) ? sut.tpl.failed + ' ' :'<x>', '\tTime:', time, 'ms', '\tDescription:\t' , data);
    }

  } // end else

  sut.__proto__.store = setPrototypeOf(this, { all: sutStorage,
    passed: sutStorage.passed,
    failed: sutStorage.failed
  });

};

module.exports = SUTMessage;
