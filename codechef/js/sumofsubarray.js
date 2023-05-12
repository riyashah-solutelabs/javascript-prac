let n = 74, total = 665;
// let arr = [1,2,3,7,5];
let arr = [142,112,54 ,69 ,148, 45, 63, 158, 38 ,60 ,124 ,142 ,130 ,179 ,117 ,36 ,191 ,43 ,89 ,107 ,41 ,143 ,65 ,49 ,47 ,6 ,91 ,130, 171, 151, 7 ,102 ,194 ,149 ,30 ,24 ,85, 155, 157 ,41 ,167 ,177 ,132 ,109 ,145 ,40 ,27 ,124 ,138 ,139, 119 ,83, 130, 142, 34 ,116 ,40 ,59 ,105 ,131 ,178 ,107 ,74 ,187 ,22 ,146 ,125 ,73 ,71 ,30 ,178 ,174 ,98 ,113];

class Solution{

    subArrSum(arr,n,total){
        let start = 0;
        let sum = 0;
        let flag =0;
        if(total == 0) return -1;
        for(let i=0;i<n;i++){
            sum += arr[i];
            while(sum > total){
                sum -= arr[start];
                start++;
            }
            if(sum == total){
                flag=1;
                console.log([start+1,i+1]);
            }
        }
        if(flag == -1) return [-1];
    }
}
let obj = new Solution();
console.log(obj.subArrSum(arr,n,total));
// console.log(ans);