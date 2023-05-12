let users = [
    {name:"Riya",age:22,course:"NodeJs"},
    {name:"Shreya",age:23,course:"QA"},
    {name:"Rajvi",age:23,course:"NodeJs"},
    {name:"Ritisha",age:24,course:"MBA"},
    {name:"Monu",age:22,course:"BBA"},
];

let age = [22,11,33,55,66,77,88,43,78,90,54];

// for(let i=0 ; i<users.length;i++){
//     console.log(`User Name IS : ${users[i].name} and I am : ${users[i].age} years old, I am persuing in ${users[i].course}`);
// }
// for(let i=0 ; i<age.length;i++){
//     console.log(age[i]);
// }

// users.forEach(function(user,index){
//     // console.log(user)
//     console.log(index)
//     // console.log(`User Name IS : ${user.name} and I am : ${user.age} years old, I am persuing in ${user.course}`);
// })

// users.forEach((user,index) => {
//     console.log(user.name,index);
// })
users.forEach((user,index) => (console.log(user.name,index)))

// age.forEach(function(age){
//     console.log(age)
// })