// Print all duplicate elements of an array

let arr = [1,22,3,4,22,,"r","s","r"]

const duplicates = arr.filter((value, index, arr) => {
    return arr.indexOf(value) !== index; 
});
    
let s = new Set(duplicates)
console.log(...s);
console.log(...new Set(duplicates));