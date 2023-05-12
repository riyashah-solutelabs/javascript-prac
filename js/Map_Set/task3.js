let map = new Map();

map.set("name", "John");

let keys = map.keys();

keys = Array.from(keys);
// Error: keys.push is not a function
keys.push("more");
console.log(keys);