public class Solution {
    public char NextGreatestLetter(char[] letters, char target) {
        if(letters[0] > target)
            return letters[0];

        int start = 0; int end = letters.Length-1;

        while(start <= end){
            int midIdx = start + (end-start)/2;

            if(letters[midIdx] <= target){
                start = midIdx + 1;
            } else if (letters[midIdx] > target){
                end = midIdx - 1;
            }

        }

        if(start < letters.Length)
            return letters[start];
        return letters[0];
    }
}