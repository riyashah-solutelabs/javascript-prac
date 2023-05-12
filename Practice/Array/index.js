// let arr1 = new Array();

// let arr = [];
// // console.log(arr === arr1);
// // console.log(arr == arr1);
// // console.log(JSON.stringify(arr) == JSON.stringify(arr1));

// // arr = arr1;
// // console.log(arr === arr1);

// arr1.push(1,2,3,4)
// console.log(arr1);

// arr1.pop();
// console.log("pop :" , arr1);

// arr1.shift();
// console.log("shift :", arr1);

// arr1.unshift(8,9,10,11);
// console.log("unshift :", arr1);

// arr1.sort();
// console.log("sort :", arr1);
// arr1.sort((a,b) => a-b);
// console.log("sort :", arr1);

// arr1.reverse();
// console.log("reverse :", arr1);

// arr1.splice(1,2);
// console.log("splice : ",arr1);
// arr1.splice(1,2,3,4);
// console.log("splice : ",arr1);
// arr1.splice(1,0,15,16);
// console.log("splice : ",arr1);

// // console.log(arr1.length);

// console.log(arr1.lastIndexOf(15));

// console.log(arr1.at(-1));

// console.log(typeof(arr1));
// console.log(Array.isArray(arr1));
// console.log(Array.isArray(arr1));

// let arr3 = new Array(2);
// arr3.push(1);
// console.log(arr3);

// arr1.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// // let f = arr1.find(item => item === 11);
// // console.log(f);

// let objArr = [
//     {id:0 , name:'a'},
//     {id:1, name:'b'},
//     {id:0 , name:'c'},
//     {id:2 , name:'d'},
//     {id:1, name:'f'},
//     {id:3, name:'e'},
// ]

// let fobj = objArr.find(item => item.id === 1);
// console.log("Find : ",fobj.name);
// let fobjInd = objArr.findIndex(item => item.id === 1);
// console.log("Find Index : ",fobjInd);
// let fobjLast = objArr.findLastIndex(item => item.id === 1);
// console.log("Find Last Index : ",fobjLast);


let arr = ["A","B","c","d","e","f","g","h","i","j","k","l"];
// let arr1 = [];
arr.copyWithin(arr,2,5);
console.log(arr);

// let arr2 = [1,5,6,7];
// let t = arr2.every((item,index,arr)=> item > 2)
// console.log(t);
let arr2 = [1,5,6,7];
let t = arr2.some((item,index,arr)=> item > 2)
console.log(t);

arr.fill(12,2)
console.log(arr);

let obj = {
    name:"Riya",
    age:20
}
console.log(Reflect.ownKeys(obj));

// let {age,name} = obj;
// console.log(age)
// console.log(name)

let arrDes = ["Riya","shah"];
let [lname,fname] = arrDes;
console.log(lname)