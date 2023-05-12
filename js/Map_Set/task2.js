let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


function aclean(arr){
    // let map = new Map();

//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//     map.set(sorted, word);
//     console.log(word , sorted);
//   }
//   console.log(map);
//   console.log(Array.from(map.values()));
//   return Array.from(map.values());


    let obj = {};

    for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
    }

    return Object.values(obj);
}

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"