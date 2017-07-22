const { sut, def, assert } = require('../index');

let odd = x => (x % 2 == 0) ? true : false

let countDonw = num => {
  if(num === 0){ return }
  countDonw(num-1);
}

let upper = x => x.toUpperCase()
let exclime = x => x.concat('!')
let undef

/*
* Custom miidleware
*/
const stringSizeParser = {
  size: (val) => {
    return val.length
  }
};


sut.upload(stringSizeParser)


let TestStrategyOne = () => {
  def('Test One', () => {
    assert.equal(
      sut.pipe(upper, exclime)('david'),
      'DAVID!',
      'this should be DAVID!'
    )
  })
};

let TestStrategyTwo = () => {
  def('Test Two', () => {
    assert.equal(odd(8), true, '5 is not odd')
    assert.ok(true, 'is should be ok')
  })
};

let TestStrategyThree = () => {
  def('Test Three', () => {
    assert.undefined(undef, 'this will be ok')
  })
};

sut('This is test for App')
(
  TestStrategyOne,
  TestStrategyTwo,
  TestStrategyThree,
  sut.getStats
)
