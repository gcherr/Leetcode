public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int startPtr = 0;
        int endPtr = numbers.Length-1;

        for(int i = 0; i < numbers.Length; i++){
            if(numbers[endPtr] + numbers[startPtr] > target){
                endPtr--;
            } else {
                if (numbers[endPtr] + numbers[startPtr] == target){
                    return[startPtr+1, endPtr+1];
                } else {
                    startPtr++;
                }
            }
        }
        return[Int32.MaxValue, Int32.MaxValue];
    }
}