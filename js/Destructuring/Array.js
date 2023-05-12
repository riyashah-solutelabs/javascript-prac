let arr = [1,2,3,4,5,6];
let [ae1,ae2] = arr;
console.log(ae1,ae2);

let [fname,lname] = "Riya Shah".split(" ");
console.log(fname);
console.log(lname);

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
console.log(one);

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith

let user2 = {
    name: "John",
    age: 30
  };
  
  // loop over keys-and-values
  for (let [key, value] of Object.entries(user2)) {
    console.log(`${key}:${value}`); // name:John, then age:30
  }

let mapUser = new Map();
mapUser.set("name", "John");
mapUser.set("surname", "Smith");

for(let [key,value] of mapUser){
    console.log(`${key}:${value}`); // name:John, then surname:Smith

}
for(let [key,value] of Object.entries(mapUser)){
    console.log(`${key}:${value}`); // name:John, then surname:Smith

}

let swapa = 2;
let swapb = 3;
[swapa, swapb] = [swapb, swapa];
console.log(swapa, swapb);

// ...rest
let arrresr = [1,2,3,4,5,6];
let [ae3,ae4,...rest] = arr;
console.log(ae3,ae4);
console.log(rest[0]);
