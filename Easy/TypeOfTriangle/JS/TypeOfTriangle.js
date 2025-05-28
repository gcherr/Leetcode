/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {

    if(!validEdge(nums[0], nums[1], nums[2]) ||
        !validEdge(nums[0], nums[2], nums[1]) ||
        !validEdge(nums[1], nums[2], nums[0]) ){
        return "none";
    }

    var numSet = new Set();
    for (var i = 0; i < nums.length; i++){
        numSet.add(nums[i]);
    }

    if(numSet.size == 3){
        return "scalene";
    } else if (numSet.size == 2){
        return "isosceles";
    } else {
        return "equilateral";
    }

    function validEdge( s1, s2, s3 ){
        return s1 + s2 > s3 ? true : false;
    }
};