public class Solution {
    public int MissingNumber(int[] nums) {
        int missingArrSum = 0;
        int fullArrSum = nums.Length;

        for (int i = 0; i < nums.Length; i++){
            missingArrSum += nums[i];
            fullArrSum += i;
        }

        return fullArrSum - missingArrSum;
    }
}