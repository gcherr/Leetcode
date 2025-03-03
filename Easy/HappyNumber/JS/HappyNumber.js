/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map = new Map();
    
    while(n != 1){
        if(map.get(n))
            return false;
        let num = n;
        let newNum = 0;
        while(num > 0){
            newNum += Math.pow(num % 10, 2);
            num = Math.floor(num / 10);
        }
        map.set(n, 1);
        n = newNum;
    }
    return true;
};