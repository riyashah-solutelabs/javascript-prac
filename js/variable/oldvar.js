// 1. var has no block scope
// var test = "fakse";
// if(true){
//     var test = true;
// }
// console.log(test);

// for(var i = 10;i<10;i++){
//     var one = 1;
// }
// console.log(i); //10
// console.log(one); //undefined

// 2.If a code block is inside a function, then var becomes a function-level variable:
// function sayHi(){
//     var phrase = "hello";
//     if(true){
//         console.log(phrase); //Hello
//     }
// }
// sayHi();
// console.log(phrase); //Error

// 3.“var” variables can be declared below their use
// function sayHi(){
//     a = 10;
//     console.log(a);
//     var a;
// }
// sayHi();
// function sayHi(){
//     a = 10;
//     console.log(a);
//     if(false) var a;
// }
// sayHi();
// function sayHi(){
//     a = 10;
//     if(false) {
//         var a;
//     }else{
//         console.log(a);
//     }
// }
// sayHi();
