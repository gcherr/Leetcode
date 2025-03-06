/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    var splitSentence = sentence.split(" ");
    
    for(var i = 0; i < splitSentence.length; i++){
        var word = splitSentence[i];
        var toReplace = "";
        for(var term of dictionary){
            if(word.startsWith(term)){
                if(toReplace == ""){
                    toReplace = term;
                } else if (toReplace.length > term.length){
                    toReplace = term;
                }
            }
            
        }
        
        if(toReplace.length > 0){
            splitSentence[i] = toReplace;
        }
    }
    
    
    return splitSentence.join(" ");
};