var search = function(nums, target) {
    // let n = nums.indexOf(target)
    // return n;
    let flag = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == target){
            return i;
        }else{
            flag = 1;
        }
    }
    if(flag == 1){
        return -1;
    }
};
nums = [4,5,6,7,0,1,2], target = 0
console.log(search(nums,target));