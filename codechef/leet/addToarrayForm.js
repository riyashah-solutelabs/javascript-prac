var addToArrayForm = function(num, k) {
    let join = num.join("");
    let res = BigInt(join);
    let sum = res + BigInt(k);
    console.log(sum);
    return sum.toString().split("")
};
num = [1,2,0,0], k = 34
console.log(addToArrayForm(num,k));