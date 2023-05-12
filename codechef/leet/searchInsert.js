var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] == target){
            return i;
        }else{
            while(nums[i] < target){
                i++;
            }
            return i
        }
    }
};
nums = [1,3,6], target = 5
console.log(searchInsert(nums,target));