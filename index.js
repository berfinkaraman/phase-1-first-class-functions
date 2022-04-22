function receivesAFunction(callback) {
    return callback()
}


function returnsANamedFunction() {
    return function namedFunction() {
        return "hello world *-*";
    }
}


function returnsAnAnonymousFunction() {
    return function () {
        return "who?";
    }
}