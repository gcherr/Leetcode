/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var drinkTotal = 0;
    var leftoverBottles = 0;
    
    while(numBottles > 0){
        drinkTotal += numBottles;
        
        var exchanged = Math.floor((numBottles+leftoverBottles)/numExchange);
        
        leftoverBottles = (numBottles+leftoverBottles)%numExchange;
        
        numBottles = exchanged;
        
        
    }
    
    return drinkTotal;
};