"use strict";

// 1. using a variable without declaring it...Objects are variable too
// a = 10; //gives error
// a= {p1:10,p2:20}; //gives error

// 2.Deleting variable / object is not allowed
// let x;
// x=20;
// console.log(x);
// delete x; //Error
// console.log(x);

// 3. Deleting function is not allowed
// function x(){
//     console.log("Hello");
// }
// x();
// delete x; //Error
// x();

// 4. Duplicating parameter is not allowed
// function x(p1,p1){
//     console.log("world"+p1+p1);
// }
// x(1,2);

// 5. Octal numeric literals are not allowed
// let x = 010; //Error
// console.log(x); //prints 8 if not in use strict mode

// 6. Octal escape characters are not allowed
// let x = "\010";
// console.log(x);

// 7.Writing to a read-only property
// let obj = {
//     x:0,
//     writable:false
// }; //In this change property is allowed bcz aa ek obj j 6 and writable pan obj ni property krvay
// let obj = {
//     x : {
//         value:0,
//         writable:false
//     }
// };//In this change property is allowed obj.x.writable e propery j 6


// this givess error
// Object.defineProperty(obj,"x",{
//     value:0,
//     writable:false
// })
// console.log(obj.x);
// obj.x = 10; //Error
// console.log(obj.x);

// 8.Writing to a get-only property is not allowed:
// let obj = {
//     get x(){
//         return 0;
//     }
// }
// console.log(obj.x);
// obj.x = 3.14;
// console.log(obj.x);

// 9.Deleting an undeletable property is not allowed
// delete Object.prototype; //Error

// 10.The word eval cannot be used as a variable:
// let eval = 3.14; //Error
// console.log(eval); //3.14

// 11.The word arguments cannot be used as a variable:
// let arguments = 3.14; //Error
// console.log(arguments); //3.14

// 12.The with statement is not allowed:
// with (Math){x = cos(2)}
// console.log(x);

// 13.For security reasons, eval() is not allowed to create variables in the scope from which it was called.
// eval("x=2")
// console.log(x);

// 14.In strict mode, eval() can not declare a variable using the var and let keyword:
// eval("var x = 10 ; console.log(x)") //10
// eval("var x = 10") //Error
// console.log(x);//Error
// eval("let y = 20") //Error
// console.log(y); //Error
// eval("let y = 20; console.log(y)") //20
// eval("const z = 30") //Error
// console.log(z); Error
// eval("const z = 30; console.log(z)") //30

// 15.The this keyword in functions behaves differently in strict mode.
// The this keyword refers to the object that called the function.
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):
// function myFunc(){
//     console.log(this);
// }
// myFunc();



// ................................................................
// let a;
// a=10;
// console.log(a);
// name();
// function name(){
//     console.log("name");
// }

// // we can "use strict" inside function
// function s(){
//     'use strict';
//     console.log("name");
// }