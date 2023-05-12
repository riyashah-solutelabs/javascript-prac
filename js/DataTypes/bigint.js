console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
console.log(9007199254740991n + 1n); // 9007199254740992n
console.log(9007199254740991n + 2n); // 9007199254740993n
console.log(9007199254740991 + 3); // 9007199254740994

const bigInt = 112233445556677788999n;
const sameBigInt = BigInt("112233445556677788999");
const bigintFromNumber = BigInt(10); //10n

console.log(1+2);//3n
console.log(5/2); //2.5
console.log(5n/2n); //2n
console.log(5n*2n); //10n
// console.log(2n+5); //Error :  Cannot mix BigInt and other types
// console.log(2n/5); //Error :  Cannot mix BigInt and other types

let n = 10;
let b = 4n;
console.log(n + Number(b));
console.log(BigInt(n) + b);
// console.log(+b); //Not Support + in bigint Error :Cannot convert a BigInt value to a number

// Comparision
console.log(2n > 1n);
console.log(2n > 1);
console.log(2 > 1n);
console.log(2 < 1n);

// Number and BigInt can be == but not ===
console.log(1 == 1n);
console.log(1 === 1n);

// Boolean Operation
if(0n){
    console.log("Inside If");
}
if(1n){
    console.log("Inside 1n If");
}

// Boolean operators, such as ||, && and others also work with bigints similar to numbers:
console.log(2n || 1);
console.log(0n && 1);
