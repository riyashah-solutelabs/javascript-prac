// Group items on the basis of age of given array of
// object
// Input : 
let people = [
    {name :"Alice", age: 21},
    {name :"Max", age: 20},
    {name :"Jane", age: 20}
];

people.sort((a,b) => {
    return a.age-b.age;
})
console.log(people);
