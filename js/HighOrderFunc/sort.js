let users = [
    {name:"Riya",age:22,course:"NodeJs"},
    {name:"Shreya",age:23,course:"QA"},
    {name:"Rajvi",age:23,course:"NodeJs"},
    {name:"Ritisha",age:24,course:"MBA"},
    {name:"Monu",age:22,course:"BBA"},
];

let age = [22,11,33,55,66,77,88,43,78,90,54,1,15];

// age.sort((a,b)=>a-b);
// console.log(age);
age.sort((a,b)=>a<b ? 1:-1);
console.log(age);

// users.sort((a,b)=>a.age-b.age);
// console.log(users);

// age.sort();
// console.log(age);
