// function equilibriumPoint(a, n)
//     {
//         //your code here
//         let start = 0;
//         let end = n;
//         let mid = Math.floor((start+end)/2);

//         let s = 0;
//         let s2 = 0;
//         console.log(a[mid]);
//         let m = mid;
//         while(start<mid){
//             s +=a[start];
//             start++;
//         }
//         while(mid+1 <= end-1){
//             s2 += a[mid+1]
//             mid++;
//         }
//         // while(s > s2){
//         //     console.log(a[m]);
//         //     m--;
//         //     s -= a[m]
//         // }
//         // while(s < s2){
//         //     console.log(a[m]);
//         //     m++;
//         //     s += a[m]
//         // }
//         // s= s-m;
//         // s2 = s2-m;
//         // console.log(s);
//         // console.log(s2);
//         // console.log(a[mid]);
//         if(s === s2){
//             return a.indexOf(a[mid]);
//         }else{
//             return -1;
//         }
//     }
// // console.log(equilibriumPoint([1,3,5,2,2],5));
// console.log(equilibriumPoint([20 ,17 ,42 ,25 ,32 ,32 ,30 ,32 ,37 ,9 ,2 ,33 ,31 ,17 ,14 ,40 ,9 ,12 ,36 ,21 ,8 ,33 ,6 ,6 ,10 ,37 ,12 ,26 ,21 ,3],30));

function equilibriumPoint(a, n)
{
    //your code here
    //  let i=0,j=n-1;
    // let diff = a[i]-a[j];
    // // console.log(diff);
    // if(a.length ==1) {
    //     return 1;
    // }
    // while(i < n && j >= 0 && i!=j){
    //     if(diff == 0 && j-i==2){
    //         return ((i+j)/2)+1
    //     }

    //     if(diff < 0){
    //         i = i+1;
    //         diff =diff + a[i];
    //     }
    //     else {
    //         j = j-1;
    //         diff = diff - a[j];
    //     }
    // }

// return -1;
let totalSum = 0;
          let leftSum = 0;
          for (let i = 0; i < a.length; i++) {
            totalSum += a[i];
          }
          for (let i = 0; i < a.length; i++) {
            totalSum -= a[i];
            if (leftSum === totalSum) {
              return i+1;
            }
            leftSum += a[i];
          }
            return -1;
    
    
}
console.log(equilibriumPoint([20 ,17 ,42 ,25 ,32 ,32 ,30 ,32 ,37 ,9 ,2 ,33 ,31 ,17 ,14 ,40 ,9 ,12 ,36 ,21 ,8 ,33 ,6 ,6 ,10 ,37 ,12 ,26 ,21 ,3],30));