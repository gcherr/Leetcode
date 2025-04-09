public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        HashSet<int> fullNums = new HashSet<int>();

        for(int i = 1; i <= nums.Length; i++){
            fullNums.Add(i);
        }

        for(int i = 0; i < nums.Length; i++){
            fullNums.Remove(nums[i]);
        }

        return fullNums.ToList();
    }
}