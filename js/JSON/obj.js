let jsonObj = `{"name":"Riya","age":22,"car":null}`;
let obj = JSON.parse(jsonObj);
console.log(obj.name);
console.log(obj["name"]);

var text = [];
for(let x in obj){
    // console.log(obj[x]);
    // text += x +","
    text += obj[x] +",";

}
console.log(text)