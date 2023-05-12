function kthElement(A,B,k){ 
    //code here
    let arr = [...A,...B];
    arr.sort((a,b) => a-b)
    console.log(arr);
    console.log(arr[k-1]);
}
arr1 = [2, 3, 6, 7, 9]
arr2 = [1, 4, 8, 10]
k = 5
console.log(kthElement(arr1,arr2,k));