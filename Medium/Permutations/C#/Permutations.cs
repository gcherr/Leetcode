public class Solution {
    public IList<IList<int>> Permute(int[] nums) {

        List<IList<int>> permutations = new List<IList<int>>();

        permutations = doPerm(nums);

        return permutations;
    }

    public List<List<int>> doPerm(int[] nums, ){
        List<IList<int>> permutations = new List<IList<int>>();

        for(int i = 0; i < nums.length; i++){
            List<int> currPerm = new List<int>();

            currPerm.push(nums[i]);

            for(int i = 0; i < nums.length; i++){
                
            }
        }
    }
}