/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    var numServers = 0;
    var colServers = [];
    var rowServers = [];
    
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                if(colServers[i] == null)
                    colServers[i] = 0;
                if(rowServers[j] == null)
                    rowServers[j] = 0;
                colServers[i]+=1;
                rowServers[j]+=1;
                numServers++;
            }
        }
    }
    
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                console.log(colServers[i] + ", " + rowServers[j])
                if(colServers[i] == 1 && rowServers[j] == 1){
                    numServers--;
                }
            }
        }
    }
    
    return numServers;
};
