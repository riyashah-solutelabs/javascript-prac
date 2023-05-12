// let arr = [1,2,3,4,5];
// let d = 2, n = 5;
let arr = [25 ,6 ,20 ,55 ,69 ,5 ,50 ,63 ,61 ,41, 87, 80, 2 ,96, 77, 70, 12, 43, 31, 8, 64, 41, 68, 18, 95, 79, 52 ,74, 1, 98, 3 ,26 ,3 ,74 ,32 ,23 ,79 ,81 ,37 ,39 ,21 ,24 ,18 ,22 ,71 ,47 ,44];
let d = 47;
let n = 77;

 function rotateArr(arr,d,n){

        d = d%n;
        console.log(d);
        let subArr = arr.splice(0,d);
        arr.push(...subArr);
        return arr
        // d=d%n
        // let div=n-1-d
        // function reverse(low,high){
        // while(low<high){
        //      let temp=arr[low]
        //  arr[low]=arr[high]
        //  arr[high]=temp
        //  low++,high--
        // }
        // }
        // reverse(0,arr.length-1)
        // reverse(0,div)
        // reverse(div+1,arr.length-1)
        // return arr;
}
console.log(rotateArr(arr,d,n))


// function rotateArr(arr, d, n){
//     // code here
//     // let del = arr.splice(0,d);
//     // console.log(del);
//     // arr.push(...del)
//     // console.log(arr);
//         // code here
        
       
//     }
// rotateArr(arr,d,n)

// class Solution {
    //Function to rotate an array by d elements in counter-clockwise direction. 
    // rotateArr(arr, d, n){
    //     // code here
        
    //     d = d % n;
        
    //     this.reverse(arr, 0, d-1);
    //     this.reverse(arr, d, n-1);
    //     this.reverse(arr, 0, n-1);
    //     // return arr;
        
    // }
    
    // reverse(arr, start, end){
    //     while(start < end){
    //         let temp = arr[start];
    //         arr[start] = arr[end];
    //         arr[end] = temp
    //         start++;
    //         end--;
    //     }
    //     // return arr;
    // }
// }

// let s = new Solution();
// console.log(s.rotateArr(arr,d,n));