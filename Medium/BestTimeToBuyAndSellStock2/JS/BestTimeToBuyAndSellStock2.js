/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    
    if(prices.length < 2)
        return 0;
    
    for(var i = 1; i < prices.length; i++){
        if(prices[i] > prices[i-1])
            maxProfit += prices[i]-prices[i-1];
    }
    
    return maxProfit;
};