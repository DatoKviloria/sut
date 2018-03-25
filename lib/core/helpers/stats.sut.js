/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  Update: 2018 <datokviloira@gmail.com>
*  SutJS
*/
const colors = require('../../core/modules/colors.sut');
const sut = require('../../sut');

/*
* Default helpers
* for pringing statistic
*/
exports.stats = () => {
  console.log('\nStatistics:','\n');
  if (!sut.tpl.removeColor)
    console.log(colors.bg.Green, (sut.tpl.passed) ? sut.tpl.passed + ' ' : 'Passed Test:', colors.bg.Black, sut.store.passed.length, '\t', colors.bg.Red, (sut.tpl.failed) ? sut.tpl.failed + ' ' : 'Failed Test:', colors.bg.Black, sut.store.failed.length, '\n');
  else
    console.log((sut.tpl.passed) ? sut.tpl.passed + ' ' : 'Passed Test:', sut.store.passed.length, '\t', (sut.tpl.failed) ? sut.tpl.failed + ' ' : 'Failed Test:', sut.store.failed.length, '\n');
};
