let users = [
    {name:"Riya",age:22,course:"NodeJs"},
    {name:"Shreya",age:23,course:"QA"},
    {name:"Rajvi",age:23,course:"NodeJs"},
    {name:"Ritisha",age:24,course:"MBA"},
    {name:"Monu",age:22,course:"BBA"},
];

let age = [22,11,33,55,66,77,88,43,78,90,54];

let s = age.reduce((sum,curr) => sum+curr,0);
console.log(s);
let m = age.reduce((max,curr) => {
    if(max<curr){
        max=curr;
    }
    return max;
},0);
console.log(m);
let mapMax = users.filter((x) => x.age > 22).map((x) => x.name);

console.log(mapMax);