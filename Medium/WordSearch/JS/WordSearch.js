/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            if(word.charAt(0) == board[i][j] && checkWord(board,word,i,j,0)){
                return true;
            }
        }
    }
    return false;
};

var checkWord = function(board, word, i, j, length){
    if(length == word.length){
        return true;
    }
    
    if(i > board.length-1 || i < 0 || j > board[i].length || j < 0 || board[i][j] != word.charAt(length)){
        return false;
    }
    
    var currLetter = board[i][j]
    board[i][j] = ' ';
    
    var result = checkWord(board, word, i+1, j, length+1) ||
        checkWord(board, word, i-1, j, length+1) ||
        checkWord(board, word, i, j+1, length+1) ||
        checkWord(board, word, i, j-1, length+1);
        
    board[i][j] = currLetter
        
    return result;
}