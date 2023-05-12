console.log('RIYA' < 'SHAH');
console.log('' == false);
console.log('\n\t' == false);

console.log(undefined === NaN);

console.log(undefined ?? null);
console.log("undefined" ?? null);

console.log(Number("49"));//49
console.log(Number("+49"));//49
console.log(Number("1.2"));//1.2

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
console.log(Math.trunc(Number("49")));//49
console.log(Math.trunc(Number("+49")));//49
console.log(Math.trunc(Number("1.2")));//1

console.log(String(Math.trunc(Number("49"))));//49
console.log(String(Math.trunc(Number("+49"))));//49
console.log(String(Math.trunc(Number("1.2"))));//1

// alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
// alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
// alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

a = "+49"
a = +"49"
console.log(typeof a);