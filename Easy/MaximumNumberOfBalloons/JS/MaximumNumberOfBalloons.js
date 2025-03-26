/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map();

    for(let i = 0; i < text.length; i++){
        let letter = text.charAt(i);
        if(letter != 'b' && letter != 'a' && letter != 'l' && letter != 'o' && letter != 'n') continue;

        if(map.has(letter)){
            map.set(letter, map.get(letter)+1);
        } else {
            map.set(letter, 1);
        }

    }

    if(!map.has('b') || !map.has('a') || !map.has('l') || !map.has('o') || !map.has('n')) return 0;

    let min = Number.MAX_VALUE;

    for([key,value] of map){
        //let letter = key;
        //let letterFreq = value;

        if(key == 'o' || key == 'l'){
            value = Math.floor(value/2);
        }
        if(value < min){           
            min = value;
        }
    }

    return min;
};