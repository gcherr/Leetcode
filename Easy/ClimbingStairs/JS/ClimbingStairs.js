/**
 * @param {number} n
 * @return {number}
 */
var memo = [0,1,2];

var climbStairs = function(n) {
    if(memo[n] != null){
        return memo[n]
    } else {
        memo[n] = climbStairs(n-1) + climbStairs(n-2);
        return memo[n];
    }
};