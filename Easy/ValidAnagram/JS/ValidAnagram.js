/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var map = new Map();
    
    if(s.length != t.length)
        return false
    
    for(let index in s){
        var letter = s.charAt(index);
        if(map.get(letter))
            map.set(letter, map.get(letter)+1)
        else
            map.set(letter, 1);
    }
    
    for(let index in t){
        var letter = t.charAt(index);
        if(map.get(letter)){
            if(map.get(letter) == 1){
                map.delete(letter)
            }
            else {
                map.set(letter, map.get(letter)-1)
            }
        }
        else
            return false;
    }
    
    return true;
};