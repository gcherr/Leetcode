/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b) => a-b)
    s = s.sort((a,b) => a-b)
    
    var j = 0;
    var content = 0;
    
    for(var i = 0; i < g.length; i++){
        while(s[j] < g[i] && j < s.length){
            j++;
        }
        if(s[j] >= g[i]){
            j++;
            content++;
        }
    }
    
    return content;
};