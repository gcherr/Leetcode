/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let dict = new Map();
    for(let index of s){
        console.log(index);
        if(!dict.has(index)){
            dict.set(index, 1);
        } else {
            dict.set(index, dict.get(index)+1);
        }
    }
    console.log(dict)
    for(let i = 0; i < s.length; i++){
        if(dict.get(s[i]) == 1)
            return i;
    }
    return -1;
};