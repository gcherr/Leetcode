public class Solution
{
    public int FindKthPositive(int[] arr, int k)
    {
        if (arr[0] > k)
            return k;
        else if (arr[0] > 1)
            k -= arr[0] - 1;

        for (int i = 0; i < arr.Length - 1; i++)
        {
            int result = arr[i + 1] - arr[i];
            //Console.WriteLine("result: {0} ", result);
            if (result > 1)
            {
                int newK = k - result + 1;
                if (newK <= 0)
                {
                    return arr[i] + k;
                }
                else
                {
                    k = newK;
                }
            }

        }

        int kthEl = arr.Last() + k;

        //Console.WriteLine("**" + arr.Last());

        return kthEl;
    }
}