N = 9
Arr = [34, 8, 10, 3, 2, 80, 30, 33, 1]

function maxIndexDiff(arr,n) {
    // code here
    // let max = 0;
    // for(let i=0; i<n;i++){
    //     for(let j=n-1; j>i ; j--){
    //         if(arr[i] <= arr[j])
    //         max = Math.max(max,(j-i));

    //     }
    // }
    // return max;
    let res=0;
    for(let i=0;i<n;i++){
        for(let j=n-1;j>i;j--){
            if(arr[j]>=arr[i]){
                res=Math.max(res,j-i);
                // break;
            }
        }
    }
    return res;
}
console.log(maxIndexDiff(Arr,N));