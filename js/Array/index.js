let f = ["Apple","Banana","Orange"];
console.log(f[0]);
console.log(f[1]);
console.log(f[2]);

console.log(f);
f[2]="Plum";
console.log(f);
f[3] = "Grape";
console.log(f);

let arr = ['Apple',true,3,{name:'Riya'}, function() {console.log("Hello")}];
console.log(arr[3].name);
arr[4]();

// let earr = [];
// earr[99999] = 5;
// console.log(earr[0])
// console.log(earr[99999])
// earr.age = 25;
// console.log(earr);

// let strArr = ["Hello","World"];
// console.log(strArr == "Hello,World");
// console.log(strArr === "Hello,World");
// console.log(String(strArr) === "Hello,World");
// let strArr = [1,2,3];
// console.log(strArr == '1,2,3');
// console.log(strArr === '1,2,3');
// console.log(String(strArr) === '1,2,3');

// [] becomes ""
// console.log( [] + 1 ); // "1"
// console.log( [1] + 1 ); // "11"
// console.log( [1,2] + 1 ); // "1,21"


// function createArray(){
//     let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
//     console.log(arr.constructor)

// }
// createArray()

// let a = [1,2,3,4];
// console.log(a);
// a.copyWithin(0, 1);
// console.log(a);
// a.copyWithin(0, 1,3);
// console.log(a);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);

const ff = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
ff.copyWithin(2, 0, 2);
console.log(ff);

// true bcz every elem is > 18
// const ages = [32, 33, 19, 40];
const ages = [32, 33, 16, 40]; //false bcz 16 is < 18
console.log(ages.every(checkAge))

function checkAge(age) {
  return age > 18;
}

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.fill("Kiwi");
console.log(fruits1);

const fruits2 = ["Banana", "Orange", "Apple", "Mango","Grapes"];
fruits2.fill("Kiwi",2,4);
console.log(fruits2);

let farr = [1,2,3,4];
let res = farr.filter(item => item > 2)
console.log(farr); 
console.log(res);     

const fage = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}
console.log(fage.find(checkAge));
console.log(fage.findIndex(checkAge));


let rearr = [1,2,3,4,5,6,7,8,9,1];
console.log(rearr);
rearr.reverse();
console.log(rearr);


const sages = [3, 10, 18, 20];

console.log(sages.some(checkAdult));
function checkAdult(sage) {
  return sage > 18;
}

let sortArr = [1,2,3,4,5,12,23,7];
sortArr.sort();
console.log(sortArr);
sortArr.sort((a,b) => a-b );
console.log(sortArr);

let tostr = [1,2,3,4];
console.log(tostr.toString());
let tostr2 = ["1,2,3,4"];
console.log(tostr2.toString());
let tostr3 = ["A","B","C","D"];
console.log(tostr3.toString());
