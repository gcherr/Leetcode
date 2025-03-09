public class Solution {
    public int IslandPerimeter(int[][] grid) {
        HashSet<(int,int)> set = new HashSet<(int,int)>();

        int dfs(int row, int col){
            if(row < 0 || row >= grid.Length || col < 0 || col >= grid[0].Length || grid[row][col] == 0)
                return 1;
            if( set.Contains((row,col)) )
                return 0;

            set.Add((row,col));

            return dfs(row+1, col) +
            dfs(row-1, col) +
            dfs(row, col+1) +
            dfs(row, col-1) ;
        }
        
        for(int i = 0; i < grid.Length; i++){
            for(int j = 0; j < grid[0].Length; j++){
                if(grid[i][j] == 1)
                    return dfs(i,j);
            }
        }        
        
        return 0;

        
    }

    
}