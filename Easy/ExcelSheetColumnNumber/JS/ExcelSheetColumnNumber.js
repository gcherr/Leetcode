/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let column = 0;
    let offset = 'A'.charCodeAt(0)-1;
    
    for(var i = 0; i < s.length; i++){
        column = (s.charCodeAt(i)-offset) + (column*26);
    }
    
    return column;
};