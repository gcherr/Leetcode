/**
 * @param {number[]} cost
 * @return {number}
 */
var memo = [];

var minCostClimbingStairs = function(cost) {
    climb(cost);
    var len = cost.length;
    return Math.min(memo[len-1], memo[len-2]);
};

var climb = function(cost){
    memo[0] = cost[0]
    memo[1] = cost[1]
    for(var i = 2; i < cost.length; i++){
        memo[i] = cost[i] + Math.min(memo[i-1], memo[i-2]);
    }
    console.log(memo)
}