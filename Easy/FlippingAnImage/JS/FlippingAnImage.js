/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(let row = 0; row < image.length; row++){
        let len = image[row].length;
        for(let i = 0; i < Math.floor(len/2); i++){
            let temp = image[row][i];
            image[row][i] = image[row][len-1-i];
            image[row][len-1-i] = temp;
        }
    }

    for(let row = 0; row < image.length; row++){
        let len = image[row].length;
        for(let col = 0; col < len; col++){
            if(image[row][col] == 0){
                image[row][col] = 1;
            } else {
                image[row][col] = 0;
            }
        }
    }

    return image;
};