// Once a user provides their answer, the function calls the handlers. We can pass two kinds of handlers:

// A zero-argument function, which is only called when the user gives a positive answer.
// A function with arguments, which is called in either case and returns an answer.

function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }
  
  // for positive answer, both handlers are called
  // for negative answer, only the second one
  ask("Question?", () => console.log('You said yes'), result => console.log(result));