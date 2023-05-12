// The problem with that code is that sayHi may change in the outer code. If the function gets assigned to another variable instead, the code will start to give errors:

let sayHi = function(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      sayHi("Guest"); // Error: sayHi is not a function
    }
  };
  
  let welcome = sayHi;
  sayHi = null;
  
  welcome(); // Error, the nested sayHi call doesn't work any more!


//   let sayHi = function func(who) {
//     if (who) {
//       alert(`Hello, ${who}`);
//     } else {
//       func("Guest"); // Now all fine
//     }
//   };
  
//   let welcome = sayHi;
//   sayHi = null;
  
//   welcome(); // Hello, Guest (nested call works)