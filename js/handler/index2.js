// Custom properties
function sayHi() {
    alert("Hi");
  
    // let's count how many times we run
    sayHi.counter++;
  }
  sayHi.counter = 0; // initial value
  
  sayHi(); // Hi
  sayHi(); // Hi
  
  alert( `Called ${sayHi.counter} times` ); // Called 2 times

//   A property is not a variable
// A property assigned to a function like sayHi.counter = 0 does not define a local variable counter inside it. In other words, a property counter and a variable let counter are two unrelated things.

// We can treat a function as an object, store properties in it, but that has no effect on its execution. Variables are not function properties and vice versa. These are just parallel worlds.