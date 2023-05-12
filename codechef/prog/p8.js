//8. Remove duplicates from an array and return unique

let arr = [1, 2, 3, 3, 4, 5]
let arr2 = []
arr.forEach((arr) => {
    if(!(arr2.includes(arr))){
        arr2.push(arr)
    }
})
console.log(arr2);