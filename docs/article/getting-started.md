---
path: "/article/getting-started"
date: "2018-04-03"
title: "Getting Started with SUT 2.0 Neo"
author: "Daivd Kviloria"
---

## Installing & Setup
```
    # Install sut test runner    
    $ npm install --save-dev sut@neo
    # or just
    $ npm install --save-dev sut

```

## Simple Strategy Based Test Example
File: <b>app.test.js</b>

```javascript
// import SUTJS LTS
const { sut, def, assert } = require('sut@neo');

// Create Test Strategy/Gtto
const exampleTestStrategy = () =>
    def('Example Testing ...', () =>
        assert.equal(1, 1, 'this test must passed')
        assert.okay(false, 'this test must failed')        
    )

// Call main sut container to run tests
sut(
    exampleTestStrategy,
    // Display Statistic
    sut.stats
)
```

## SUT Helper Example & Async Test's
File: <b>async.test.js</b>

```javascript
// import SUTJS LTS
const { sut, def, assert } = require('sut@neo');

// install node-fetch
// npm install node-fetch

// Create Custom SUT Helper
sut.include({
    api: {
        // Return's promise
        response: url => fetch(url)
            .then(response => response.json())
    }
})

// Create Test Strategy/Getto
const testStrategyForAPI = () =>
    // Make CB function async
    def('USER EP Testing ...', async () =>
        assert.equal(
            // Access to sut custom helper
            await sut.helper.api.response('https://jsonplaceholder.typicode.com/posts/1')
                .then((data) => data.userId)
        , 1, 'EP Works Correctly; user id === 1')        
    )

// Call main sut container to run tests
sut(
    testStrategyForAPI,
    // Display Statistic
    sut.stats
)
```


## Create Sut Server and display data on sut-ui
File: <b>server.test.js</b>

```javascript
// import SUTJS LTS
const { sut, def, assert } = require('sut@neo');

// Create Test Strategy/Gtto
const exampleTestStrategy = () =>
    def('Example Testing ...', () =>
        assert.equal(1, 1, 'this test must passed')
        assert.okay(false, 'this test must failed')        
    )

// Call main sut container to run tests
sut(
    exampleTestStrategy,
    // We Dont Care Stats anymore
    // sut.stats
)

// Craete Options Object and Describe server
const options = {
  server: {
    port: 1961, // Server Port
    data: sut.store.all // Sut Storage
  }
};

// Pass Options to connect function
sut.connect(options);

// Copy link and visit or share ...

```
## Result
## [Neo Tool](https://dkvilo.github.io/neo-tool/)
![alt text](https://i.imgur.com/6SjHTP5.png)




## Customize Terminal output

File: <b>app.test.js</b>

```javascript
// import SUTJS LTS
const { sut, def, assert } = require('sut@neo');

// install node-emojy module
// npm install node-meoji --save-dev
const emoji = require('node-emoji');

// Create Test Strategy/Gtto
const exampleTestStrategy = () =>
    def('Example Testing ...', () =>
        assert.equal(1, 1, 'this test must passed')
        assert.okay(false, 'this test must failed')        
    )

// Call sut.template function
sut.tempalte({
    passed: emoji.get(':heart:'),
    failed: emoji.get(':poop:'),
    removeColor: true
});

// Call main sut container to run tests
sut(
    exampleTestStrategy,
    // Display Statistic
    sut.stats
)
```
![Example](https://i.imgur.com/dmEy2iv.png)
