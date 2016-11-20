# Welcome to SUT

SUT is Fast, minimalist TDD framework for node.

 <br />
version: 1.0.0 <br />
Stabile: 1.0.0

## Install
```
npm install sut --save
```

## Usage && Code Example

```javascript

const sut = require('sut')

/*
* Write Some Functions For Check
*/
// SQRT (2) = 4
var sqrt = (x) => { return x*x }

// oddorEven(4) = 'odd'
// oddorEven(5) = 'even'
var oddorEven = (x) => { return ((x % 2 == 0) ? 'odd' : 'even') }

var var_1 = String(1)
var var_2 = Number(var_1)


/*
* Write Tests For Code
*/

sut.SUTClass('Global Test', (data) => {

    // Equal Test For Sqrt Function
    sut.Assert.Equal(sqrt(2), 4, 'sqrt(2) == 4')

    // Equal Test For oddorEven Function
    sut.Assert.Equal(oddorEven(8), 'odd', '8 is odd')

    // Compare Array Length
    sut.Assert.Equal([5, 8, 9, 15], [7, 8, 9], 'Arr_1 == Arr_2')

    // Compare Array Length
    sut.Assert.Equal([5, 8, 9], [7, 8, 9], 'Arr_1 == Arr_2')

    // TypeEqual Test For Variavles
    sut.Assert.TypeEqual(var_1, String(), 'var_1 is String')

    // TypeEqual Test For Variavles   
    sut.Assert.TypeNotEqual(var_2, Number(), 'var_2 is Number and it will fail')

    // Compare Array Element Sum
    sut.Assert.ArrayEqual([5, 4, 1], [5, 4, 2], 'Arr_1 sum == Arr_2 sum')
    
    sut.Assert.ArrayNotEqual([5, 2], [5, 4], 'Arr_1 sum != Arr_2 sum')
    
    // Compare Array Element Sum
    sut.Assert.ArrayEqual([2, 1], [2, 1], 'Arr_1 sum == Arr_2 sum')

    // Compare two var | x < y ? true : false
    sut.Assert.Fail(-5, 5, '-5 < 5')

    // Compare two var | x > y ? true : false
    sut.Assert.Ok(75, -75, '75 > -75')

    // Get Statisti
    sut.Assert.InitTest(data)

})
```
# Code Result
<img src="https://s18.postimg.org/i293ddkll/sut.png" />


## Recomended Tools
  Nodemon [WIKI](https://www.npmjs.com/package/nodemon) <br />
  install ``` npm install -g nodemon  ```

Author: David Kviloria <br />
LICENSE: MIT
