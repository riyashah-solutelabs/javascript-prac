let arr = [0,0,0,1,1] , n = 5;
// let arr = [0,0,0,0,0] , n = 5;

function transitionPoint(arr, n) {
    //code here
    let res = arr.indexOf(1);
    return res;
}
console.log(transitionPoint(arr,n));