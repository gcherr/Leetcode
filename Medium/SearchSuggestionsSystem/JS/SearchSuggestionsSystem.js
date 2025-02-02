/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
   
    products = products.sort();
    
    console.log(products);
    
    
    var result = [];
    
    for(var i = 0; i < searchWord.length; i++){
        var curr = searchWord.slice(0, i+1);
        
        var currSuggestions = [];
        for(var j = 0; j < products.length; j++){
            if(products[j].slice(0,i+1) == curr){
                currSuggestions.push(products[j]);
            }
            if(currSuggestions.length >=3)
                break;
        }
        result.push(currSuggestions);
    }
    
    return result;
};