/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var index = 1;
    for(var i = 0; i < nums.length -1; i++){
        if(nums[i] != nums[i+1]){
            nums[index] = nums[i+1];
            index++;
        }
    }
    return nums.slice(0,index).length;
};