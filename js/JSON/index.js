// let jsonobj = `{
//     "name":"Riya",
//     "age":"20"
// }`;
// jsonparse = JSON.parse(jsonobj);
// console.log(jsonparse.name);

// let text = '{"name":"Riya","age": "function(){return 30;}","city":"Mumbai"}';
// let obj = JSON.parse(text);
// console.log(obj.age);
// console.log(obj.city);
// obj.age = eval("(" + obj.age + ")");
// console.log(obj.age());

// const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.age = eval("(" + obj.age + ")");

let obj = {
    name:"riya",
    age:22
}
let myJSON = JSON.stringify(obj);
localStorage.setItem("myJSON", myJSON);

let data = localStorage.getItem("myJSON");
let getObj = JSON.parse(data);
console.log(getObj.name);

