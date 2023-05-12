let nums1 = [1,3], nums2 = [2]
nums1 = [3], nums2 = [-2,-1]
// nums1 = [1,2], nums2 = [3,4]

var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1,...nums2]
    nums.sort((a,b) => a-b);
    console.log(nums);
    // console.log(nums[1]);
    // console.log(nums[2]);
    let n = nums.length;
    let m = Math.floor(nums.length/2);
    let res = nums.length % 2 !== 0 ? nums[m] : (nums[m - 1] + nums[m]) / 2;
    // if(n === 3){
    //     return nums[1];
    // }else if( n === 1){
    //     return nums[0]
    // }
    // let mid = nums.length/2;
    // // console.log(mid);
    // let f = Math.floor(mid);
    // // console.log(f);
    // let c = Math.ceil(mid+1);
    // // console.log(c);
    // let indf = nums[f-1];
    // let indc = nums[c-1];
    // // console.log(indf,indc);
    //     console.log((indf+indc)/2);
    // let res = nums.reduce((sum,curr) => {
    //     return sum + curr
    // })
    // return (res/n);
    // console.log();
    return res;
};

console.log(findMedianSortedArrays(nums1,nums2));