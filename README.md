# Welcome to SUT

SUT is Fast, minimalist TDD framework for node. <br /> <br />
<img src="https://travis-ci.org/DatoKviloria/sut.svg?branch=master" />

<br />

## Install
```
npm install sut --save
```

[WIKI AND API PAGE](https://sutjs.github.io/docs/)

## Usage && Code Example

```javascript

const { sut, assert, def } = require('sut');

let odd = (x) => (x % 2 == 0) ? true : false


sut('Global Test For App.js', (data) =>{

    var bla = 12;

    def('Fuc One', (desc) => {
        Assert.ok(false)
        Assert.ok(true)
        Assert.ok(false)
    })

    Func('Func Two', (desc) => {
        Assert.equal(odd(5), true, '5 is not odd')
    })


    sut.getStat(data)
})


```
# Code Result
<img src="https://s12.postimg.org/97he0ggq5/sut.png" />


## Recomended Tools
  Nodemon [WIKI](https://www.npmjs.com/package/nodemon) <br />
  install ``` npm install -g nodemon  ```

Author: David Kviloria <br />
LICENSE: MIT
