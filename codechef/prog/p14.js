var climbStairs = function(n) {
    let arr = [];
    for(i=1;i<=n;i++){
        arr.push(i);
    }
    for(let i =2; i <= n; i++){
        // console.log(arr[i-1]);
        arr[i] = arr[i - 1] + arr[i - 2]
        // console.log(arr);
    }
    return arr[n-1]
};
console.log(climbStairs(4));