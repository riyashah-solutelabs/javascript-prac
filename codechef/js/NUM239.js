// bake your code here
let n = 2;
let L = 1, R = 10;
let cnt = 0;
for(let i = L ; i<= R; i++){
    let stri = i.toString();
    let arr = ["2","3","9"]
    for(let j in arr){
        if(stri.endsWith(arr[j])){
            cnt++;
        }
    }
}
console.log(cnt)