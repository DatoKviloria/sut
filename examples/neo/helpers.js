const { sut } = require('../../index');

const fetch = require('node-fetch');


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
    },

    api: {
      response: () => fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())

    }

  }
);
