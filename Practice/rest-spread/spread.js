let obj = {
    name : "riya"
}
let obj2 = {
    age: 20
}

let obj3 = [obj, obj2]
obj3.role = "teacher"
console.log(obj3)
// console.log(obj);
let arr = [1, 2, 3, 4, 5]

console.log(Math.max(...arr));

let obj4 = {}
// Object.assign(obj4,obj,obj2);
Object.assign(obj4,...obj3);
console.log(obj4);