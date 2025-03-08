/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var triangle = [];
    for(var i = 0; i < numRows; i++){
        if(i == 0){
            triangle.push([1]);
        } 
        else {
            var arr = [];
            for(var j = 0; j < (i+1); j++){
                if(j == 0 || j == i){
                    arr.push(1);
                }
                else{
                    arr.push(triangle[i-1][j-1] + triangle[i-1][j]);
                }
            }
            triangle.push(arr)
        }
    }
    return triangle;
};