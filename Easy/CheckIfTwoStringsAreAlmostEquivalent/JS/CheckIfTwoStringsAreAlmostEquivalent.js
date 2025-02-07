/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let map1 = new Map();

    for(let i = 0; i < word1.length; i++){
        const letter1 = word1[i];
        if(map1.has(letter1)){
            map1.set(letter1, map1.get(letter1) + 1);
        }
        else{
            map1.set(letter1, 1);
        }

        const letter2 = word2[i];
        if(map1.has(letter2)){
            map1.set(letter2, map1.get(letter2) - 1);
        }
        else{
            map1.set(letter2, -1);
        }
    }

    for([key, value] of map1){
        if(Math.abs(value) > 3)
            return false;
    }

    return true;

};