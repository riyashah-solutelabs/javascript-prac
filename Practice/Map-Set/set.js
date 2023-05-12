// let map = new Map()
// map.set("name","riya");
// console.log(map.get("name"));
// console.log(map.has("name"));
// console.log(map.delete("name"));
// console.log(map.has("name"));
// console.log(map.get("name"));
// console.log(map.size);

// let obj = {
//     name:"riya",
//     age:20
// };
// let map = new Map(Object.entries(obj));
// // map.set()
// console.log(map.get("name"));

// let prices = Object.fromEntries([
//     ['banana',1],
//     ['orange',2],
//     ['meal',3]
// ])
// console.log(prices.orange);

let banana = {name : "banana", price : 1};
let orange = {name : "orange", price : 1};
let k = {name : "k", price : 1};
let meal = {name : "meal", price : 1};


let map = new Set();
map.add(banana)
map.add(orange)
map.add(k)
map.add(meal)
map.add(meal)

// let obj = Object.fromEntries(map.entries());
// let obj = Object.fromEntries(map);
console.log(map.size)
// console.log(obj.meal)
// console.log(obj.k)

for(let user of map){
    console.log(user.name)
}
// for(let user of map.keys()){
//     console.log(user.name)
// }

// console.log(map.keys());
// console.log(map.values());