/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/
const colors = require('../../core/modules/colors.sut')
const assert = require('../../core/assert.sut')

/*
* Default helpers
* for pringing statistic
*/
exports.getStats = () => {
  console.log('\n<------------- [Statistics] ------------->','\n');
  console.log(colors.bg.Green,'Passed Test:', colors.bg.Black, assert.passed.length, '\t', colors.bg.Red,'Failed Test:', colors.bg.Black, assert.failed.length, '\n')
}
