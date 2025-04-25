/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dict = new Map();
    let majorityVal = Math.floor(nums.length/2);
    for(let index in nums){
        if(dict.has(nums[index])){
            dict.set(nums[index], dict.get(nums[index]) + 1);
        }
        else
            dict.set(nums[index], 1);

        if(dict.get(nums[index]) > majorityVal){
            return nums[index];
        }
    }
    //According to problem solution should be found in the loop
    //Next line will find it if it is somehow not found after the loop 
    return dict.keys().find(key => dict.get(key) > majorityVal);
};