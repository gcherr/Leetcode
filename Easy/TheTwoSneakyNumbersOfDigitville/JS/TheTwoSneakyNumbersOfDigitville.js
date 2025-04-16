/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let result = [];
    let map = new Map();

    for(let i of nums){
        if(map.has(i)){
            result.push(i);
            if(result.length == 2){
                return result;
            }
        } else {
            map.set(i, 1);
        }
        
    }

    return result;

};