const foo = function() {
    const x = 5

    return function() {
        console.log(x)
    }
}

const outerFn = foo()

console.log(outerFn)

outerFn()