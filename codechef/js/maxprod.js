// let arr = [6, -3, -10, 0, 2];
// let arr = [2, 3, 4, 5, -1, 0];
// let arr = [-4];
// let arr = [2 ,-8 ,6 ,12 ,22 ,27 ,29 ,-38 ,-31 ,-29 ,21 ,21 ,27 ,32];
// let n = 5;
let n = 1;
let arr = [-4]

function maxProduct(arr,n){
    //code here
    // let ans = arr[0]
    //     let max = ans, min = ans
    //     for(let i = 0 ; i< n;i++){
    //         if (arr[i] < 0){
    //             temp = max
    //             max = min
    //             min = temp
    //         }
    //         max = Math.max(arr[i], max*arr[i])
    //         min = Math.min(arr[i], min*arr[i])
    //         ans = Math.max(ans, max)
    //     }
    //     return ans
    let max = parseInt(arr[0]);
    for(let i=0;i<n;i++){
        let prod=1;
        let j = i;
        while(j<n){
            prod *= parseInt(arr[j]);
            max=Math.max(prod,max);
            j++;
        }
    }
    return max;
}
console.log(maxProduct(arr,n));
