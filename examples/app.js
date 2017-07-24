const {
  sut,
  def,
  assert
} = require('../index');

let undef;

/*
* Define Halper Functions for your test
* for access use: sut.helper.[name]
*/
sut.include({
  size: x => x.length,
  upper: x => x.toUpperCase(),
  exclime: x => x.concat('!'),
  odd: x => (x % 2 == 0) ? true : false,
  countDonw: num => {
    if(num === 0){ return }
    countDonw(num-1);
  }
})

/*
 * Crate Test strategy for specific functions
*/
let TestStrategyOne = () => {
  def('Test One', () => {
    assert.equal(
      sut.pipe(sut.helper.upper, sut.helper.exclime)('david'),
      'DAVID!',
      'this should be DAVID!'
    );
    assert.arrayEqual([1, 3, 3], [1, 2, 3])
  })
};

/*
 * Second strategy
*/
let TestStrategyTwo = () => {
  def('Test Two', () => {
    assert.equal(sut.helper.odd(8), true, '5 is not odd')
    assert.ok(true, 'is should be ok')
  })
};

let TestStrategyThree = () => {
  def('Test Three', () => {
    assert.undefined(undef, 'this will be ok')
  })
};

sut(
  TestStrategyOne,
  TestStrategyTwo,
  TestStrategyThree,
  sut.getStats
)
