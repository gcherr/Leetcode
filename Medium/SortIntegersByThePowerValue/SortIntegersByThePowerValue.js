/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    var map = new Map();
    
    for(var i = lo; i <= hi; i++){
        var currVal = i;
        var steps = 0;
        if(map.has(currVal)){
            steps = map.get(currVal)
            map.set(i, steps);
            continue;
        }
        while(currVal != 1){
            
            if(currVal % 2 == 0){
                currVal = currVal / 2;
            } else {
                currVal = (3*currVal) + 1;
            }
            steps++;
        }
        map.set(i, steps);
    }
    return [...map.entries()].sort((a,b) => a[1]-b[1])[k-1][0];
    
    
};