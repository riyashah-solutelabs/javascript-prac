// 'use strict'

let x = 5;
// console.log(x);
// delete x;
// console.log(x);

function y(){
    console.log("hello");
}
// y();
// delete y;
// y();

// function d(p1,p1){
//     console.log(p1,p1);
// }
// d(3,5);


// let oct =  010;
// console.log(oct);

// let octe = "\010";
// console.log(octe);

const obj = {
    z:1
};
Object.defineProperty(obj,"y",{
    value:10,
})
Object.defineProperty(obj,"x",{
    value:5,
    writable:false
})
Object.defineProperty(obj,"z",{
    value:15,
    writable:false
})
// Object.defineProperty(obj,"Z",{
//     value:8,
//     writable:false
// })
// console.log(obj);
// console.log(obj.y);
// obj.x = 3.14;
// console.log(obj.x);
// console.log(obj.z);
// console.log(obj);
// obj.Z = 22;
// console.log(obj);

// for ( let key in obj){
//     console.log(obj[key]);
// }
// for ( let v of obj){ //Error
//     console.log(v);
// }
// console.log(Object.keys(obj));

// let objThis = {
//     x:10,
//     y:20,
//     sayHi(){
//         console.log(this);
//         sayBye = () => {
//             console.log(this);
//         }
//         sayBye();
//     }
// }

// objThis.sayHi();

let obj1 = {};
let obj2 = {};

console.log(obj1 === obj2);
console.log(obj1 == obj2);
console.log(Object.is(obj1,obj2));
obj2 = obj1;

console.log(obj1 === obj2);
console.log(obj1 == obj2);
console.log(Object.is(obj1,obj2));

console.log(NaN === NaN);
console.log(NaN == NaN);
console.log(Object.is(NaN,NaN));

console.log(0 === -0);
console.log(0 == -0);
console.log(Object.is(0, -0));

let b = 123n;
console.log(b)
console.log(Number(b))
console.log(BigInt(b))

console.log(undefined == NaN);
console.log(undefined >= NaN);
