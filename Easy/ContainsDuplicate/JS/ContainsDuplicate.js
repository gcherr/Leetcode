/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length == 0) return false;
    
    let numsSet = new Set(nums);
    
    return numsSet.size != nums.length;
};