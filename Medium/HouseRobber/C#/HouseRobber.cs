public class Solution {
    public int Rob(int[] nums) {
        int prevMax = 0;
        int currMax = 0;

        for(int i = 0; i < nums.Length; i++){
            int prevCurrMax = currMax;
            currMax = Math.Max(prevMax + nums[i], currMax);
            prevMax = prevCurrMax;
        }

        return currMax;
    }
}