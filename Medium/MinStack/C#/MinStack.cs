public class MinStack {
    
    Stack<Tuple<int,int>> stack; //Item1 = value, Item2 = min

    public MinStack() {
        stack = new Stack<Tuple<int,int>>();
    }
    
    public void Push(int val) {
        if(stack.Count == 0){
            stack.Push(Tuple.Create(val, val));
            return;
        }
        int currMin = stack.Peek().Item2;
        if(val < currMin){
            currMin = val;
        }
        stack.Push(Tuple.Create(val, currMin));
    }
    
    public void Pop() {
        stack.Pop();
    }
    
    public int Top() {
        return stack.Peek().Item1;
    }
    
    public int GetMin() {
        return stack.Peek().Item2;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */