let n = 9
let arr = [350 ,863 ,1902 ,2328 ,2854 ,3915 ,6800 ,8955 ,9877]
// let arr = [4287]
function rearrange(arr, n){
    // code here
    if(n === 1){
        return arr;
    }else{
        let arr2 = [...arr];
        arr.length = 0;
        let j = n
        for(let i=0;i<=n;i++){
        while(i < j){
            arr.push(arr2[j-1],arr2[i]);
            j--;
            i++;
        }
    }
    }
    // arr = [...arr2]
    return arr
}
console.log(rearrange(arr,n));