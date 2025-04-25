/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dict = {};
    let majorityVal = Math.floor(nums.length/2);
    for(let index in nums){
        if(dict[nums[index]]){
            dict[nums[index]] += 1;
        }
        else
            dict[nums[index]] = 1;
    }
    return Object.keys(dict).find(key => dict[key] > majorityVal);
};