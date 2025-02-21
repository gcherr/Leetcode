/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxSum = nums[0];
    let currSum = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            currSum+=nums[i];
        }
        else {
            currSum = nums[i];
        }

        if(currSum > maxSum){
            maxSum = currSum;
        }
    }

    return maxSum;
};