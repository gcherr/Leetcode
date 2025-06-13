public class Solution {
    Dictionary<int, int> fibonacci = new Dictionary<int, int>
    {
        {0,0},
        {1,1},
    };

    public int Fib(int n) {
        if(fibonacci.TryGetValue(n, out int value)){
            return value;
        }
        fibonacci.TryAdd( n, Fib(n-1) + Fib(n-2) );
        return fibonacci[n];
    }
}