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

let map = new Map();
map.set('banana',1)
map.set('orange',2)
map.set('k',2)
map.set('meal',3)
map.set('meal',4)

// let obj = Object.fromEntries(map.entries());
let obj = Object.fromEntries(map);
console.log(obj.orange)
console.log(obj.meal)
console.log(obj.k)
console.log(map.size);
