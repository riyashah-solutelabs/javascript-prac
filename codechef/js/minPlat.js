let arr = [0900, 0940, 0950, 1100, 1500, 1800]
let dep = [0910, 1200, 1120, 1130, 1900, 2000] , n = 6;
function findPlatform(arr, dep, n)
{
    arr.sort((a,b)=>a-b);
    dep.sort((a,b)=>a-b);
    console.log(arr);
    console.log(dep);
    
    let platform = 1;
    let res = 1;
    let i = 1;
    let j = 0;
    
    while(i<n && j<n){
        if(arr[i] <= dep[j]){
            platform++;
            i++;
        } else if(arr[i] > dep[j] ){
            platform--;
            j++;
        };
        
        if(platform > res) res = platform;
    }
    return res;
}
console.log(findPlatform(arr,dep,n));