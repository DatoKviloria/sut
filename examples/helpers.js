const { sut } = require('../index');
/*
* Define Halper Functions for your test
* for access use: sut.helper.[name]
*/
sut.include(
  {
    
    math: {
      odd: x => (x % 2 == 0) ? true : false,
      countDonw: num => {
        if(num === 0){ return; }
        this.countDonw(num-1);
      }
    },
    
    array: {
      size: x => x.length
    },
    
    string: {
      upper: x => x.toUpperCase(),      
      exclime: x => x.concat('!')
    }

  }
);
