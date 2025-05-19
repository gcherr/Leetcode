public class Solution {
    public string FrequencySort(string s) {

        StringBuilder result = new StringBuilder();

        Dictionary<char,int> dict = new Dictionary<char,int>();

        foreach(char c in s){
            if(!dict.TryAdd(c, 1)){
                dict[c] = dict[c]+1;
            }
        }

        List<KeyValuePair<char,int>> list= new List<KeyValuePair<char,int>>(dict);

        list.Sort((a,b) => b.Value.CompareTo(a.Value));

        foreach(KeyValuePair<char,int> el in list){
            result.Append(el.Key, el.Value);
        }
        return result.ToString();
    }
}