/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1)
        } else {
            map.set(nums[i], 1);
        }
    }

    const newMap = Array.from(map).sort((a, b) => b[1] - a[1]);

    let result = [];
    let count = 1;

    for (let [key, value] of newMap) {
        result.push(key);
        if(count >= k)
            break;
        count++;
    }

    return result;

    
};