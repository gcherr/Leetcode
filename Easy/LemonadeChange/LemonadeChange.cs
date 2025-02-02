public class Solution
{
    public bool LemonadeChange(int[] bills)
    {
        int[] denominations = [0, 0, 0];

        for (int i = 0; i < bills.Length; i++)
        {
            if (bills[i] == 5)
            {
                denominations[0]++;
            }
            else if (bills[i] == 10)
            {
                if (denominations[0] == 0)
                {
                    return false;
                }
                else
                {
                    denominations[0]--;
                    denominations[1]++;
                }
            }
            else
            {
                if (denominations[1] > 0 && denominations[0] > 0)
                {
                    denominations[0]--;
                    denominations[1]--;
                }
                else if (denominations[0] >= 3)
                {
                    denominations[0] -= 3;
                }
                else
                {
                    return false;
                }
            }
        }

        return true;
    }
}