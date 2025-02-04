/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var numIslands = 0;

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            //            if(i == 1 && j == 2)
            //                    console.log(grid[i][j])
            if (grid[i][j] == 1) {
                numIslands++;
                //                console.log(i + " : " + j)


                transformIsland(i, j, grid);
            }
        }
    }

    return numIslands;
};

var transformIsland = function (i, j, grid) {
    //if(i == 1 && j == 2)
    //    console.log(grid[i][j] + "***")
    //if(i>=0 && i<grid.length && j>=0 && j<grid[i].length && grid[i][j]==1){
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) {
        return;
    } else {
        grid[i][j] = 0;

        transformIsland(i + 1, j, grid);
        transformIsland(i - 1, j, grid);
        transformIsland(i, j + 1, grid);
        transformIsland(i, j - 1, grid);
    }
}// JavaScript source code
