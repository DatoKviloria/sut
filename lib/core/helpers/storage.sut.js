/*
* sut@neo 2018-2019 dkvilo <datokviloria@gmail.com>
*/

exports.Storage = {

  BUILD: 0,

  PREV_BUILD: 'GENESIS',

  TYPE_PASSED : 'passed',
  TYPE_FAILED : 'failed',

  passed : [],
  failed : [],

  set : function(type, value) {
    switch (type.toLowerCase()) {
      case this.TYPE_PASSED: this.passed.push(value); break;
      case this.TYPE_FAILED: this.failed.push(value); break;
      default: throw new Error('Storage Error: Unknown Type Possibility [Passed or Failed]');
    }
  }

};
