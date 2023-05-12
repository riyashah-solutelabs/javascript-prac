// IIFE

// In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).
"use strict";
var test = "shah";
(function(){
    var test = "test";
    var test = "s";
    if(true){
        console.log(test);
    }
})();
console.log(test);

(function(){
    console.log("Hello");
}());

!function(){
    console.log("World");
}();

+function(){
    console.log("HEY!");
}();
