const { Assert, Func, Class, Super } = require('./index');


var odd = (x) => {
    return (x % 2 == 0) ? true : false;
}


Class('Global Test For App.js', (data) =>{
    var bla = 12;

    Func('Fuc One', (desc) => {
        Assert.ok(false)
        Assert.ok(true)
        Assert.ok(false)
    })

    Func('Func Two', (desc) => {
        Assert.equal(odd(5), true, '5 is not odd')
    })


    Super(data)

})

