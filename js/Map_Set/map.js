// let obj = {
//     name:"john",
// }

// let objmap = new Map(Object.entries(obj));
// console.log(objmap.keys());
// let map = new Map(Object.entries(obj));
// // map.set("age",25);
// // console.log(map);
// // console.log(obj);
// // map.set('a',1);
// // map.set('b',2);
// // let el = map.get('a');
// // console.log(el);
// // console.log(map);
// // map.delete('a');
// // console.log(map);
// // map.clear();
// // console.log(map);

let map = new Map();
map.set('name','john');
map.set('age',25);
map.set('gender','male');
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// console.log(map);

// let mapEle = Object.fromEntries(map.entries());
// console.log(mapEle['name']);
// console.log(mapEle.age);


// let fromObj = Object.fromEntries([
//     ['name','john'],
//     ['age',25],
//     ['gender','male']
// ]);
// console.log(fromObj.gender);


let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");
console.log(weakMap);
john = null; // overwrite the reference
console.log(weakMap);
// john is removed from memory!

// let john = { name: "John" };

// let weakMap = new WeakMap(Object.entries(john));
// let weakMap = new WeakMap(Object.entries(john));
// let weakMap = new WeakMap();
// weakMap.set(john, "...");
// weakMap.set("riya", "shah");
// console.log(weakMap);
// john=null;
// console.log(weakMap);
// console.log(weakMap.has(john));
// console.log(weakMap.keys());

let mp=new Map()
    mp.set("a",11);
    mp.set("b",2);
    mp.set("c",6);
    mp.set("c",5);
    mp.set("d",5);
    console.log(mp.keys());
    console.log(mp.entries());

    // for(let m in mp){
    //     console.log(m)
    // }