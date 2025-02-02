public class LRUCache
{

    Dictionary<int, LinkedListNode<Node>> cache;
    LinkedList<Node> nodeList;
    int size;

    private class Node
    {
        public int Key { get; }
        public int Value { get; set; }

        public Node(int key, int value)
        {
            Key = key;
            Value = value;
        }
    }

    public LRUCache(int capacity)
    {
        this.cache = new Dictionary<int, LinkedListNode<Node>>(size);
        this.nodeList = new LinkedList<Node>();
        this.size = capacity;

    }

    public int Get(int key)
    {
        if (cache.TryGetValue(key, out LinkedListNode<Node> node))
        {
            nodeList.Remove(node);
            nodeList.AddFirst(node);
            return node.Value.Value;
        }
        return -1;
    }

    public void Put(int key, int value)
    {
        if (cache.TryGetValue(key, out LinkedListNode<Node> node))
        {
            node.Value.Value = value;
            nodeList.Remove(node);
            nodeList.AddFirst(node);
        }
        else
        {
            if (nodeList.Count == this.size)
            {
                cache.Remove(nodeList.Last.Value.Key);
                nodeList.RemoveLast();
            }
            LinkedListNode<Node> newNode = new LinkedListNode<Node>(new Node(key, value));
            cache.Add(key, newNode);
            nodeList.AddFirst(newNode);
        }
    }

}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */
