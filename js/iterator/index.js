let range = {
    from:1,
    to:5
};

range[Symbol.iterator] = function(){
    return {
        current:this.from,
        last:this.to,

        next(){
            if(this.current <= this.last){
                return {done:false,value:this.current++}
            }else{
                return {done:true}
            }
        }
    };
};
for(let num of range){
    console.log(num);
}

// 2nd way to write
// let range = {
//     from:1,
//     to:5,
//     [Symbol.iterator] (){
//         return {
//             current:this.from,
//             last:this.to,
    
//             next(){
//                 if(this.current <= this.last){
//                     return {done:false,value:this.current++}
//                 }else{
//                     return {done:true}
//                 }
//             }
//         }
//     }
// };
// for(let num of range){
//     // console.log(num);
//     if(num == 3){
//         break;
//     }
//     console.log(num);
// }

// String is iterable
// for(let char of "test"){
//     console.log(char);
// }
// for(let char of "X😂"){
//     console.log(char);
// }

// calling an iterator explicitly
// let str = "Hello";
// let iterator = str[Symbol.iterator]();

// while(true){
//     let result = iterator.next();
//     if(result.done) break;
//     console.log(result.value);
// }


// Array-like
let arrayLike = {
    0:"Hello",
    1:"World",
    length:2
}
// for(arr of arrayLike){
//     console.log(arr);
// }
// for(arr in arrayLike){
//     console.log(arr, arrayLike[arr]);
// }

// let arr = Array.from(arrayLike);
// console.log(arr);
// arr.pop();
// console.log(arr);
let arr = Array.from(range);
console.log(arr);
arr.pop();
console.log(arr);

// square each number
arr = Array.from(range, num => num * num);

console.log(arr); // 1,4,9,16,25

// Here we use Array.from to turn a string into an array of characters:

let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);
console.log(chars);
// console.log(chars[0]); // 𝒳
// console.log(chars[1]); // 😂
// console.log(chars.length); // 2
chars.pop();
chars.push(2,4,5)
console.log(chars);
console.log(chars.slice(1,3)); //[2,4]

function slice(str,start,end){
    return Array.from(str).slice(start,end) //['2','4']
    // return Array.from(str).slice(start,end).join('') //24
    // return Array.from(str).slice(start,end).join(',') //2,4
}
let s = "X245";
console.log(slice(s,1,3)); //['2','4'] if we use join the 24