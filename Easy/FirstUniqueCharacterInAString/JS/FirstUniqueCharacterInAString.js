/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var dict = {};
    for(var index in s){
        if(!dict[s.charAt(index)]){
            dict[s.charAt(index)] = 1
        } else {
            dict[s.charAt(index)] += 1
        }
    }
    for(var index in dict){
        if(dict[s.charAt(index)] == 1)
            return index;
    }
    return -1
};