public class Solution {
    public int CoinChange(int[] coins, int amount) {
        Dictionary<int,int> map = new Dictionary<int,int>(amount);

        map.Add(0,0);

        for(int i = 1; i <= amount; i++){
            map.Add(i, amount+1);

            foreach(int coin in coins){
                if(coin <= i){
                    map[i] = Math.Min(map[i], map[i-coin] + 1);
                }
            }
        }

        return map[amount] <= amount ? map[amount] : -1;
    }
}