/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/
const { pipe } = require('./pipe.sut');
const { stats } = require('./stats.sut');
const { include } = require('./include.sut');
const { template } = require('./terminalMessageTemplate.sut');
const { use } = require('./loadAssert.sut');
const { Storage } = require('./storage.sut');
const { connect } = require('./connection.sut');

module.exports = {
  use,
  pipe,
  stats,
  include,
  connect,
  template,
  Storage
};
