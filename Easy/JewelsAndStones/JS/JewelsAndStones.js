/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var numSame = 0;
    var jewelDict = {};
    for(var jewel in J){
        jewelDict[J.charAt(jewel)] = 1;
    }
    for(var stone in S){
        if (jewelDict[S.charAt(stone)]){
            numSame++;
        }
    }
    return numSame;
};