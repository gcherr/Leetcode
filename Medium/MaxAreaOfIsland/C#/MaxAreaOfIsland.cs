public class Solution {
    public int MaxAreaOfIsland(int[][] grid) {
        int maxArea = 0;

        int dfs(int row, int col){
            if(row < 0 || row >= grid.Length || col < 0 || col >= grid[0].Length || 
                grid[row][col] == 0 || grid[row][col] == 2)
                return 0;

            grid[row][col] = 2;

            return dfs(row+1, col) +
            dfs(row-1, col) +
            dfs(row, col+1) +
            dfs(row, col-1) + 1;
        }
        
        for(int i = 0; i < grid.Length; i++){
            for(int j = 0; j < grid[0].Length; j++){
                if(grid[i][j] == 1)
                    maxArea = Math.Max(dfs(i,j), maxArea);
            }
        }        
        
        return maxArea;

        
    }
}