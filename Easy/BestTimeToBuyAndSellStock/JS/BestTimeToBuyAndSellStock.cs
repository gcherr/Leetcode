public class Solution {
    public int MaxProfit(int[] prices) {
        
        int min = 0;
        int maxProfit = 0;
        
        for(int i = 0; i < prices.Length; i++){
            if(i == 0 || prices[i] < min){
                min = prices[i];
            } 
            int currProfit = prices[i] - min;
            if(currProfit > maxProfit){
                maxProfit = currProfit;
            }
        }
        
        return maxProfit;
        
    }
}