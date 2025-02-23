/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let ballMap = new Map();
    let colorMap = new Map();
    let result = [];

    for([ball, color] of queries){
        if(ballMap.has(ball)){
            let currBallOldColor = ballMap.get(ball);
            let oldColorCount = colorMap.get(currBallOldColor);
            colorMap.set(currBallOldColor, oldColorCount-1)
            if(colorMap.get(currBallOldColor) == 0){
                colorMap.delete(currBallOldColor);
            }
        }

        ballMap.set(ball, color);
        if(colorMap.has(color)){
            colorMap.set(color, colorMap.get(color) + 1);
        } else {
            colorMap.set(color, 1);
        }

        result.push(colorMap.size);
    }

    return result;
};