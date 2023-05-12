console.log(15 & 9);
console.log(9 & 15);
console.log(9 & 5);
console.log(15 | 9);
console.log(9 | 15);
console.log(19 | 15);

let a = (1+2,3+4);
console.log(a); //7
(a = 1+2),3+4;
console.log(a);

let b = (1+2);
console.log(b);

for (a = 1, b = 3, c = a * b; a < 10; a++) {
    // c = a * b
    console.log(a,b,c);
}