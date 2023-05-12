let a = [15];
let n = 1;

function majorityElement(a, size)
{
    //your code here
    let obj = {};
    a.forEach(element => {
        obj[element]? obj[element]++ : obj[element] = 1;
    });
    // console.log(obj);
    for(let key in obj){
        if(obj[key]> size/2){
            return key
        }
    }
    return -1;
}
console.log(majorityElement(a,n));