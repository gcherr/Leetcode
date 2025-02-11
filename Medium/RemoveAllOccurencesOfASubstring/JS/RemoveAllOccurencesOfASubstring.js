/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let stack = [];

    for(let i = 0; i < s.length; i++){
        stack.push(s.charAt(i));

        //console.log(`${s.charAt(i)} : ${part.charAt(part.length-1)} :${s.charAt(i) == part.charAt(part.length-1)} `)

        if(s.charAt(i) == part.charAt(part.length-1) && stack.length >= part.length){
            //console.log(stack.slice(i, stack.length).join(""))
            if(part == stack.slice(stack.length-part.length, stack.length).join("")){
                for(let k = 0; k < part.length ; k++){
                    stack.pop();
                }
            }
        }
    }

    return stack.join('');
};