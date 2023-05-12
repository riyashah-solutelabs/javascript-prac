var reverse = function(x) {
    let n,r,sum = 0;
    let isneg ;
    (x < 0)?isneg=true:isneg=false;
    n = Math.abs(x); 
    while(n > 0)    
    {    
        r=parseInt(n%10);    
        sum=parseInt((sum*10)+r);   
        // console.log(sum); 
        n=parseInt(n/10);    
    }    
    if(sum >= Math.pow(-2,31) && sum <= (Math.pow(2,31) - 1)){
        if(isneg){
            return -(sum)
        }
        return sum;
    }   
    return 0;
};
// let x = 1534236469;
let x = 123;
console.log(reverse(x));