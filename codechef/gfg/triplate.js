let arr = [0, -1, 2, -3, 1]
// let arr = [1,2,3]
// let arr = [97,-27,2,-34,61,-39]
// let n = 5;
let n = 5;
function findTriplets(arr, n)
{
        //your code here
        arr.sort(function(a,b){ return(a-b)})
        for(let i =0;i<n;i++){
            let j=i+1,k=n-1
            
           while(j<k){
               let sum=arr[i]+arr[j]+arr[k]
               if(sum==0){
                   return 1
               }else if(sum<0){
                   j++
                   
               } else {
                   k--
               }
               
           }
        }
        return 0

        arr.sort((a,b) => a-b);
        console.log(arr);

        for(let i=0;i<n;i++){
            let j=i+1, k = n-1 , sum = 0;
            // console.log(j,arr[k]);
            while(j<k){
                sum = arr[i] + arr[j] + arr[k];
                if(sum === 0){
                    return 1;
                }else if(sum < 0){
                    j++;
                }else{
                    k--;
                }
            }
            
        }
        return 0;
}
console.log(findTriplets(arr,5));