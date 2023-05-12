function duplicates(a, n)
{
    //your code here
    // let arr = [];
    // let dup = [];
    // a.forEach((item) => {
    //     if(arr.includes(item)){
    //         dup.push(item)
    //     }else{
    //         arr.push(item)
    //     }
    // })
    // return dup;
    let obj = {};
    a.forEach(element => {
        obj[element]? obj[element]++ : obj[element] = 1;
    });
    // console.log(obj);
    for(let i in obj){
        if(obj[i] >=2){
            console.log(i);
        }
    }
}

// console.log(duplicates([2,3,4,5,3,14,7,15,2]));
console.log(duplicates([13 ,9 ,25 ,1 ,1 ,0 ,22 ,13 ,22 ,20 ,3 ,8 ,11 ,25 ,10 ,3 ,15, 11, 19, 20, 2, 4, 25, 14, 23, 14]));