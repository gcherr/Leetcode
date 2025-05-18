public class Solution {
    public IList<string> LetterCombinations(string digits) {
        
        List<string> result = new List<string>();
        
        if(digits.Length == 0 ){
            return result;
        }
        
        string[] mapping = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
        
        findCombinations(digits, result, mapping, "");
        
        return result;
    }
    
    public void findCombinations(string digits, List<string> result, string[] mapping, string current){
        
        //if(current.Length == digits.Length){
        if(digits.Length == 0){
            result.Add(current);
            return;
        }
        
        //foreach(char c in digits){
            //string currMapping = mapping[Char.getNumericValue(c)];
            char c = digits[0];
            string currMapping = mapping[(int)c-'0'];
            
            foreach(char ch in currMapping){
                string newCurrent = current + ch;
                findCombinations(digits.Substring(1), result, mapping, newCurrent);
            }
       // }
    }
}