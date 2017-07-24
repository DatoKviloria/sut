# Welcome to SUTJS 1.9.1 (early alpha)

SUTJS is fast, TDD framework for nodejs.

![TravisCI](https://travis-ci.org/DatoKviloria/sut.svg?branch=master)

## Install SUTJS

> $ npm install sut --save-dev

> $ yarn add sut

[WIKI and API page for version: 1.6.2f](https://sutjs.github.io/docs/)

# Update Log

- Supported for v 1.9.1
  - :white_check_mark: sut
    - @params: ... @type: [Function]
  - sut.getStats
    - @type: Function
  - sut.pipe
    - @type: Function
    - @params: ... @type: [Function]
  - :white_check_mark: sut.include (for declaring helper functions)
    - @type: [Function]
    - @params: [Helper @type: Object]
    - @access: sut.helper.[methodname]    
  - :white_check_mark: sut.upload (only for sut level helpers)
    - @type: [Function]
    - @params: [Module @type: Object]
    - @access: sut.[modulename]
  - :white_check_mark: def [Constructor Function]
    - @type: [Function]
    - @params: desc:String, callback:Function
  - :white_check_mark: assert [Object]
    - assert.equal @type: [Function]
    - assert.notEqual @type: [Function]
    - assert.strictEqual @type: [Function]
    - assert.notStrictEqual @type: [Function]
    - assert.above @type: [Function]
    - assert.true @type: [Function]
    - assert.notTrue @type: [Function]
    - assert.false @type: [Function]
    - assert.notFalse @type: [Function]
    - assert.null @type: [Function]
    - assert.notNull @type: [Function]
    - assert.nan @type: [Function]
    - assert.notNan @type: [Function]
    - assert.undefined @type: [Function]
    - assert.notUndefined @type: [Function]
    - assert.arrayEqual @type: [Function]
    - assert.arrayNotEqual @type: [Function]
    - assert.typeEqual @type: [Function]
    - assert.typeNotEqual @type: [Function]
    - assert.fail @type: [Function]
    - assert.ok @type: [Function]


## Usage && Code Example for v 1.9.1

> Migration to 2.0.0 !
>
> NodeJs Version: 7.x or Up

```javascript

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

```
# Code Result
![Code Result](http://i.imgur.com/IIu0kPX.png)

**Author**: David Kviloria @dkvilo

[**List of contributors**](https://github.com/dkvilo/sut/community)

**LICENSE**: *MIT*
