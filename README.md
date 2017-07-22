# Welcome to SUT

SUT is Fast, minimalist TDD framework for node. <br /> <br />
<img src="https://travis-ci.org/DatoKviloria/sut.svg?branch=master" />

<br />

## Install
```
npm install sut --save
```

[WIKI and API page for version: 1.6.2f](https://sutjs.github.io/docs/)

## Usage && Code Example for v 2.0.0

```javascript

/*
* New Update
* Migration to 2.0.0
*/

const { sut, def, assert } = require('sut');

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

/*
* apply Middleware
*/
sut.upload(stringSizeParser)


/*
* create strategy function
*/
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

/*
* Run strategy group using sut
*/
sut('This is test for App')
(
  TestStrategyOne,
  TestStrategyTwo,
  TestStrategyThree,
  sut.getStats
)

```
# Code Result
<img src="http://i.imgur.com/Fwe2Ucd.png" />


## Recomended Tools
  Nodemon [WIKI](https://www.npmjs.com/package/nodemon) <br />
  install ``` npm install -g nodemon  ```

<b>Author:</b> David Kviloria <br />
<b>LICENSE:</b> MIT
