let nums = [4,1,4,0,3,5]
var distinctAverages = function(nums) {

    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let minInd = 0;
    let maxInd = 0;
    let avg = [];
    while(min <= max){   
        avg.push((min + max)/2);
        minInd = nums.indexOf(min);
        nums.splice(minInd,1)
        maxInd = nums.indexOf(max);
        nums.splice(maxInd,1)
        min = Math.min(...nums);
        max = Math.max(...nums);
    }
    // let cnt = 0;
    const count = avg.filter((value, index, arr) => {
        return arr.indexOf(value) === index; 
    });
    return count.length;

};
console.log(distinctAverages(nums));