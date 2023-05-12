// let arr = [12,15,8,10];
// // let c = 0;
// // for(let i in arr){
// //     if(arr[i] >= 10){
// //         c++;
// //     }else{
// //         c = c;
// //     }
// // }
// // console.log(c);

// let count = arr.reduce((acc,curr) =>{
//     if(curr>=10){
//         acc++;
//     }
//     return acc;
// },0)
// console.log(count);

// # cook your dish here
// let arr = [];
// let n = prompt("Enter Size Of array");
// for (let index = 0; index < n; index++) {
//     const element = prompt(`Enter ${index} Element : `);
//     // console.log(typeof element);
//     let ele = Array(element)
//     console.log(ele);
//     arr.push(ele);
// }
// let count = arr.reduce((acc,curr) => {
//     if(curr >= 10){
//         acc++;
//     }
//     return acc;
// },0)
// console.log(count)

// let obj = {
//     fname : "Riya",
//     lname : "Shah",
//     sayHi : function(){
//         console.log(`${this.fname}`);
//     }
// }
// let obj2 = {
//     fname:"Shreya"
// }

// let s = obj.sayHi.bind(obj2);
// console.log(s);
// bake your code here
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     __proto__ : person,
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let m = Object.create(member);
//   let res = m.fullName()
//   console.log(res);
// //   let fullName = person.fullName.bind(member);
// //   console.log(fullName());

// let N = 3;
// let arr = [1,2,1,3];
// let arr2 = [];
// let num = [];
// let c = 0;
// for(let i in arr){
//   if(!(arr2.includes(arr[i]))){
//         // num=arr[i];
//         arr2.push(arr[i]);
//         c++
//   }else{
//     c++;
//   }
//   // console.log(c);
//   // console.log(arr2);
// }

  
// let n1 = 3;
// let arr1 = [1,2,1];
// let arr2 = []
// var elecnts = {};
// arr1.forEach(ele => {
//   elecnts[ele] = (elecnts[ele] || 0) +1;
// });

// console.log(elecnts);
// console.log(Object.entries(elecnts));

// for(let [key,val] of Object.entries(elecnts)){
//   if(val !== 2){
//     arr2.push(key)
//   }
//   // console.log(val);
// }
// console.log(arr2);

