var isPalindrome = function(x) {
    // let n = x, r=0,sum = 0, isneg=false;
    let absN = Math.abs(n);
    while(absN > 0){
        r = parseInt(absN%10);
        sum = (sum*10) + r;
        console.log(sum);
        absN = parseInt(absN/10);
    }
    // console.log(sum,n);
    console.log(n);
    // if(n < 0){
    //     isneg = true;
    // }
    // if(isneg){
    //     console.log(isneg);
    //     sum = (sum)
    // }
    console.log(sum,n);
    if(sum == n){
        return true;
    }else{
        return false;
    }
};
let x = -121;
console.log(isPalindrome(x))