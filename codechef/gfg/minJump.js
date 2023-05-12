// let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
let arr = [2 ,3 ,1 ,1 ,2 ,4 ,2 ,0 ,1 ,1];
// let arr = [1, 4, 3, 2, 6, 7];
let n = 10;
// let n = 6;

function minJumps(arr,n){
    //code here
    // let step = arr[0] , ele = 0, jump = 0,cnt = 0;
    // for(let i=0;i<=step;i++){
    //     console.log(i+step);
    //     ele = arr[i+step];
    //     jump++;
    //     console.log(ele);
    //     step = ele;
    //     // console.log(step);
    //     if(step > n){
    //         // console.log(arr[n-1]);
    //         ele = arr[n-1]
    //         // console.log(ele);
    //     //    jump++;
    //     }
    //     // console.log(n);
    //     if(arr.indexOf(ele) === (n-1)){
    //         return jump;
    //     }
    // }
    // return jump;
    // let arr = [2 ,3 ,1 ,1 ,2 ,4 ,2 ,0 ,1 ,1];
    let jump=0;
        let curr=0;
        let count=0;
        for(let i=0;i<arr.length-1;i++){
            let sum=i+arr[i];
            jump=Math.max(jump,sum);
            if(i==curr){
                count++;
                console.log(curr);
                // console.log(count);
                curr=jump;
            }
        }
        if(curr<arr.length-1){
            return-1;
        }
        return count;
}
console.log(minJumps(arr,n));

// minJumps(arr,n){
//     //code here
//     let step=arr[0]
//     let jump=1
//     let max=arr[0]
//     if(n<=1){
//         return -1
//     }
//     else if(arr[0]==0){
//         return -1
//     }
//     else{
//         for(let i=1;i<arr.length;i++){
//             if(i==n-1){
//                 return jump
//             }
//             if(max<(arr[i]+i)){
//                 max=arr[i]+i
//             }
//             step--
//             if(step==0){
//                 jump++
//                 if(max<=i){
//                     return -1
//                 }
//                 step=max-i
//             }
//         }
//         return jump
//     }
   
// }

// minJumps(arr,n){
//     //code here
//     let jump=0;
//     let curr=0;
//     let count=0;
//     for(let i=0;i<arr.length-1;i++){
//         let sum=i+arr[i];
//         jump=Math.max(jump,sum);
//         if(i==curr){
//             count++;
//             curr=jump;
//         }
//     }
//     if(curr<arr.length-1){
//         return-1;
//     }
//     return count;
// }