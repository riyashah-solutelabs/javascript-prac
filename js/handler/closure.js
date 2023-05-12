// Function properties can replace closures sometimes. For instance, we can rewrite the counter function example from the chapter Variable scope, closure to use a function property:

function makeCounter() {
    // instead of:
    // let count = 0
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
  
    return counter;
  }
  
  let counter = makeCounter();
  alert( counter() ); // 0
  alert( counter() ); // 1