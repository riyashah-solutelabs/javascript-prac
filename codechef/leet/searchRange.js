var searchRange = function(nums, target) {
    let f = nums.indexOf(target)
    let l = nums.lastIndexOf(target)
    let arr = []
    arr.push(f,l)
    return arr
};
nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums,target));