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
require('./helpers');

let undef;

/*
 * Crate Test strategy for specific functions
*/
let TestStrategyOne = () => {
  def('Test One',  async () => {
    await assert.equal(
      sut.pipe(sut.helper.string.upper, sut.helper.string.exclime)('david'),
      'DAVID!',
      'Variable name is equal to DAVID!'
    );
    await assert.arrayEqual([1, 3, 3], [1, 2, 3], 'Array [1, 3, 3] is equal to Array [1, 2, 3]');
  });
};

/*
 * Second strategy
*/
let TestStrategyTwo = () => {
  def('Test Two', () => {
    assert.equal(sut.helper.math.odd(8), true, '8 არის ლუწი');
    assert.equal(true, true, 'Variable a is equal to Variable b');
  });
};

let TestStrategyThree = () => {
  def('Test Three', () => {
    assert.undefined(undef, 'Variable is undefined');
    assert.arrayEqual([1,2,4,7,5], [1,2,4,7,6], 'Array [1,2,4,7,5] is equal to Array [1,2,4,7,5]');
  });
};


let TestAPIStrategy = () => {
  def ('API TEST', async () => {
    assert.equal(await sut.helper.api.response().then(user => user.id), 1, 'API Works correctly');
  });
};


sut.template({
  passed: emoji.get(':heart:'),
  failed: emoji.get(':poop:'),
  removeColor: false
});

sut(
  TestStrategyOne,
  TestStrategyTwo,
  TestStrategyThree,
  TestAPIStrategy,
);

const options = {
  server: {
    port: 1961,
    data: sut.store.all
  },
  client: {
    chat: true
  }
};

sut.connect(options);