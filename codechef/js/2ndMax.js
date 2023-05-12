function maxval(arr){
    // let newArr = arr.filter((items,index,self) => {
    //     return arr.indexOf(items) === index;
    // })
    // console.log(newArr);
    // let max = Math.max(...newArr);
    let newArr = new Set(arr)
    newArr = [...newArr]
    console.log(newArr);
    let max = Math.max(...newArr);
    console.log(max);
    let maxIndex = newArr.indexOf(max);
    console.log(maxIndex);
    newArr.splice(maxIndex,1);
    if(newArr.length == 0){
        return -1;
    }
    max = Math.max(...newArr);
    return max;
}
// console.log(maxval([3,3,3,3]));
console.log(maxval([28 ,43 ,26 ,65 ,60 ,54 ,51 ,35 ,42 ,48 ,33 ,40 ,58 ,38 ,64 ,47 ,44 ,49 ,46 ,25, 57, 39 ,55 ,45 ,29 ,32, 61 ,53 ,31 ,36 ,56 ,63 ,30 ,52 ,27 ,34 ,50 ,41 ,37 ,66 ,62 ,59]));