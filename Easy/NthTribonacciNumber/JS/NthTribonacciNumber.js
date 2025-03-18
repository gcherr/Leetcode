/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let map = new Map([
        [0,0],
        [1,1],
        [2,1]
    ]);
    
    return compute(n, map);
    
    
};

var compute = function(num, map) {
    let val = map.get(num);
    
    if(val != undefined)
        return val;
    else{
        let result = compute(num-1, map) + compute(num-2, map) + compute(num-3,map);
        map.set(num, result);
        return result;
    }
}
