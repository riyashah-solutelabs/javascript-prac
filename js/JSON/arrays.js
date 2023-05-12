// let jsonArr = '["Riya",22,null,{"name":"shah","car":"one"},true,["in","side","array"]]';
// let arr = JSON.parse(jsonArr);
// // console.log(arr);
// console.log(arr[2]);
// console.log(arr[3].name);
// console.log(arr[5]);
// console.log(arr[5][0]);

// Array Objects
let jsonArrObj = `{
    "name":"Riya",
    "cars":["one","two","three"]
}`;
let arrObj = JSON.parse(jsonArrObj);
console.log(arrObj.name);
console.log(arrObj.cars[0]);
