// function f() {
//     let value = 123;
  
//     return function() {
//       console.log(value);
//     }
//   }
  
//   let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
//   // of the corresponding f() call
// g();


// function f() {
//     let value = Math.random();
  
//     return function() { console.log(value); };
//   }
  
//   // 3 functions in array, every one of them links to Lexical Environment
//   // from the corresponding f() run
//   let arr = [f(), f(), f()];


// An important side effect in V8 (Chrome, Edge, Opera) is that such variable will become unavailable in debugging.
// function f() {
//     let value = Math.random();
  
//     function g() {
//         console.log(value);
//     //   debugger; // in console: type alert(value); No such variable!
//     }
  
//     return g;
//   }
  
//   let g = f();
//   g();
 

// let value = "Surprise!";

// function f() {
//   let value = "the closest value";

//   function g() {
//     console.log(value);
//     // debugger; // in console: type alert(value); Surprise!
//   }

//   return g;
// }

// let g = f();
// g();
