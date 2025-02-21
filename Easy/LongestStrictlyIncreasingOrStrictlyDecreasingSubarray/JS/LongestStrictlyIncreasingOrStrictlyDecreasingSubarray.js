/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let longestLength = 1;
    let currLength = 1;
    let increasing = true;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            if(!increasing){
                increasing = true;
                currLength = 1;
            }
            currLength++;
        }
        else if (nums[i] < nums[i-1]){
            if(increasing){
                increasing = false;
                currLength = 1;
            }
            currLength++;
        }
        else {
            currLength = 1;
        }

        if(currLength > longestLength){
            longestLength = currLength;
        }
    }

    return longestLength;
};