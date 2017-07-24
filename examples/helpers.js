const {sut} = require('../index');

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
