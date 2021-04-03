"use strict";
// Q6
var add = (function(){
    let counter = 0;
    const add = function (){
        counter += 1;
    }
    const reset = function (){
        counter = 0;
    }

    const getCounter = function (){
        return counter;
    }
    return {
        add: add,
        reset: reset,
        counter: getCounter
    }
})();

console.log(add.counter());
add.add();
console.log(add.counter());
add.reset();
console.log(add.counter());

