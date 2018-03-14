/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/
const { pipe } = require('./pipe.sut');
const { getStats } = require('./getStats.sut');
const { include } = require('./include.sut');
const { template } = require('./terminalMessageTemplate.sut');
const { use } = require('./loadAssert.sut');
const { Storage } = require('./storage.sut');

module.exports = {
  use,
  pipe,
  getStats,
  include,
  template,
  Storage
};
