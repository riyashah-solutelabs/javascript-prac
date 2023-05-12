// alert( alert(1) || 2 || alert(3) );
// solution
// The answer: first 1, then 2.

// alert( alert(1) || 2 || alert(3) );
// The call to alert does not return a value. Or, in other words, it returns undefined.

// The first OR || evaluates its left operand alert(1). That shows the first message with 1.
// The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
// The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
// There will be no 3, because the evaluation does not reach alert(3).

alert( alert(1) && alert(2) );
// solution
// The answer: 1, and then undefined.

alert( alert(1) && alert(2) );
// The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

// Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.

alert( 1 && null && 2 ); //null

alert( null || 2 && 3 || 4 );
// solution
// The answer: 3.

alert( null || 2 && 3 || 4 );
// The precedence of AND && is higher than ||, so it executes first.

// The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4

