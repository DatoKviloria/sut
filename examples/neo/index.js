const {
  sut,
  def
} = require('../../index');

const assert = require('../../lib/core/assert.sut');

sut.use({
  chai: require('chai').assert,
  sut: assert,
  node: require('assert')
});

const emoji = require('node-emoji');

// load helpers
require('../helpers');

let undef;

/*
 * Crate Test strategy for specific functions
*/
let TestStrategyOne = () => {
  def('Test One', () => {
    assert.equal(
      sut.pipe(sut.helper.string.upper, sut.helper.string.exclime)('david'),
      'DAVID!',
      'ცვლადი name უნდა იყოს DAVID!'
    );
    assert.arrayEqual([1, 3, 3], [1, 2, 3], 'მასივი [1, 3, 3] თანასწორია [1, 2, 3] - ის');
  });
};

/*
 * Second strategy
*/
let TestStrategyTwo = () => {
  def('Test Two', () => {
    assert.equal(sut.helper.math.odd(8), true, '8 არის ლუწი');
    assert.equal(true, true, 'ცვლადი a ცვლადი b-ს თანასწრია');
  });
};

let TestStrategyThree = () => {
  def('Test Three', () => {
    assert.undefined(undef, 'ცვლადის მნიშვნელოაბა არის undefined');
    assert.arrayEqual([1,2,4,7,5], [1,2,4,7,6], 'მასივი [1,2,4,7,5] თანასწორია მასივი [1,2,4,7,5] - ის');
  });
};

sut.template({
  passed: emoji.get(':heart:'),
  failed: emoji.get(':poop:'),
  removeColor: false
});

sut(TestStrategyOne, TestStrategyTwo, TestStrategyThree, sut.stats);

const options = {
  server: {
    port: 1961,
    message: true,
    data: sut.store.all
  },
  client: {
    chat: true
  }
};

sut.connect(options);