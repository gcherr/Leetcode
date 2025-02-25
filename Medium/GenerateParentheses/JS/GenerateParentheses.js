/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let result = [];

    var findParentheses = function(currentStr, open, close, n){
        if(currentStr.length == n*2){
            //console.log(currentStr);
            result.push(currentStr);
        }

        if(open < n){
            findParentheses(currentStr+'(', open+1, close, n);
        }
        if(close < open){
            findParentheses(currentStr+')', open, close+1, n);
        }
    }

    findParentheses("", 0, 0, n);

    return result;
};