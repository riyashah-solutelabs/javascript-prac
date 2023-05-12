let s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(2);
console.log(s);


// let riya = {name:"riya",age:20};
// let shah = {name:"riya"};

// let newSet = new Set();
// newSet.add(riya.name);
// newSet.add(riya.age);
// newSet.add(riya.name);
// newSet.add(shah);
// console.log(newSet);

let riya = {name:"riya",age:20};
let shreya = {name:"shreya"};
let rajvi = {name:"rajvi"};

let newSet = new Set();
newSet.add(riya);
newSet.add(shreya);
newSet.add(rajvi);
// console.log(newSet);

// for(let user of newSet){
//     console.log(user.name);
// }
// // we can iterate this way also
// newSet.forEach(function(user){
//     console.log(user.name);
// })
// newSet.forEach((value, valueAgain,newSet) => {
//     console.log(value);
//     // console.log(valueAgain);
//     // console.log(newSet); //value ni jem j treat kre jo 2nd ah na lkhie to
//     // console.log(value.name);
//   });

  // console.log(newSet.keys());
  // console.log(newSet.values());
  // console.log(newSet.entries());
// console.log(newSet);
console.log(newSet.has(riya));
console.log(newSet.has(shreya));
shreya = null;
console.log(newSet.has(shreya));
// console.log(newSet);
  // let copySet = newSet;
  // console.log(copySet);
  // newSet.clear();
  // newSet = null;
  // console.log(`Aftrr null reference \n`);
  // console.log(copySet);


// let weakSet = new WeakSet();
// weakSet.add(riya);
// weakSet.add(shreya);
// weakSet.add(rajvi);
// console.log(weakSet.has(riya));
// console.log(weakSet.has(shreya));
// riya = null;
// console.log(weakSet.has(riya));


// for(let user of weakSet){
//   console.log(user.name);
// }