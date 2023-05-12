// // function test() {
// //   var foo = 33;
// //   if (foo) {
// //     let foo = foo + 55; // ReferenceError

// //     // runs normallyy 
// //     // foo = foo + 55; 
// //     // console.log(foo);
// //   }
// // }
// // test();

// const users = [
//     { firstName: "Riya", lastName:"Shah", age:22},
//     { firstName: "Shreya", lastName:"Panchal", age:23},
//     { firstName: "Rajvi", lastName:"Shah", age:22},
// ];

// const output = users.reduce(function chkage(acc,curr){
//     if(curr.age < 23){
//     //    acc[curr.firstName] = curr.firstName;
//        acc.push(curr.firstName);
//     }else{

//     }
//     return acc;
// },[])

// console.log(output);

// var a = 10.9;
// // if(a instanceof String){
// // if(Number.isInteger(a)){
// if(!Number.isNaN(a)){
//     // console.log("String");
//     // console.log("integer");
//     console.log("Number");
// }else{
//     console.log("not");
// }

// var a = 1;
// var b = 2;

// if (a === 1) {
//   var a = 11; // the scope is global
//   let b = 22; // the scope is inside the if-block

//   console.log(a);  // 11
//   console.log(b);  // 22
// }

// console.log(a); // 11
// console.log(b); // 2

// let countries = ['Österreich', 'AZhyorra', 'Vietnam'];

// alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

// alert( countries.sort( (a, b) => a.localeCompare(b) ) );

"use strict";

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert( user.ref.name ); 