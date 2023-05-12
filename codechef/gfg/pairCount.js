function getPairsCount(arr,n,k){
    //code here
    // let s = {};
    // let res = [];
    // let count = 0;
    // for(let i=0; i<n; i++){
    //      let remain = k - arr[i];
    //      if(remain in s){
    //             count += s[remain]
    //         //  res.push([arr[i],remain]);
    //      }
    //      s[arr[i]] = i;   
    // }
    // // let cnt = res.length;
    // // return cnt;
    // return count;
    const pairs = {}; 
    let count = 0; 
  
    // iterate the array
    for (let i = 0; i < arr.length; i++) {
      const complement = k - arr[i]; 
      if (pairs[complement]) { 
        count += pairs[complement]
      }
      pairs[arr[i]] = pairs[arr[i]] ? pairs[arr[i]] + 1 : 1; 
    }
  
    return count;
}

// console.log(getPairsCount([1,1,1,1],4,2));
// console.log(getPairsCount([1,5,7,1],4,6));
// console.log(getPairsCount([1,1,2,1,1],4,2));
console.log(getPairsCount([1,5,5,5,5,7],6,10));