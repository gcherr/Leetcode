/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let result = [];
    
    let row1 = new Map([
        ["q", 1],
        ["w", 1],
        ["e", 1],
        ["r", 1],
        ["t", 1],
        ["y", 1],
        ["u", 1],
        ["i", 1],
        ["o", 1],
        ["p", 1]
    ]);
    
    let row2 = new Map([
        ["a", 1],
        ["s", 1],
        ["d", 1],
        ["f", 1],
        ["g", 1],
        ["h", 1],
        ["j", 1],
        ["k", 1],
        ["l", 1]
    ]);
    
    let row3 = new Map([
        ["z", 1],
        ["x", 1],
        ["c", 1],
        ["v", 1],
        ["b", 1],
        ["n", 1],
        ["m", 1]
    ]);
    
    for(var i = 0; i < words.length; i++){
        var map = null;
        var word = words[i].toLowerCase();
        
        if(word){
            
            if(row3.get(word[0]) == 1){
                map = row3;
            } else if(row2.get(word[0]) == 1){
                map = row2;
            } else {
                map = row1;
            }
            
            var canBeTyped = true;
            
            for(var j = 1; j < word.length; j++){
                if(map.get(word[j]) != 1){
                    canBeTyped = false;
                    break;
                }
            }
            
            if(canBeTyped)
                result.push(words[i]);
            
        }
    }
    
    return result;
};