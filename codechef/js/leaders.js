function leaders(arr, n){
    // code here
    // let arr2 = []
    // for(let i=0;i<n;i++){
    //     for(let j=i+1;j<n;j++){
    //         if(arr[i] <= arr[j]){
    //             flag = 0;
    //             break;
    //         }else{
    //             flag = 1;
    //         }
    //         // console.log(j,n);
    //     }

    //     if(i === n-1) flag=1;
    //     if(flag == 1)
    //     arr2.push(arr[i])
    //     // return arr[n-1]
    // }
    // // if(arr2.length == 0)
    // //     arr2.push(arr[n-1])
    // return arr2;
    if(arr.length==0){
        return [];
    }
    let leaderArr = [];
    leaderArr.push(arr[n-1]);
    // console.log(leaderArr);
    let temp = arr[n-1];
    for(let i = n-2;i>=0;i--){
        console.log(arr[i]);
        if(arr[i]>=temp){
            leaderArr.push(arr[i]);
            temp= arr[i];
        }
    }
    
    
    return leaderArr.reverse();
}

console.log(leaders([16,17,4,3,5,2],6));
// console.log(leaders([31,40,93,40,98],5));
// console.log(leaders([63,70,80,33,33,47,20],7));