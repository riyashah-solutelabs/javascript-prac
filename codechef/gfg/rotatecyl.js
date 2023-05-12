function rotate(arr,n){
    //code here
    // let delEle = arr.splice(n-1,1);
    // arr.unshift(...delEle)
    // console.log(arr)
    let ele = arr.pop();
        arr.unshift(ele)
        return arr;
}

console.log(rotate([1,2,3,4,5],5));
