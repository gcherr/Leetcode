/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    let sum = 0;
    
    if(root)
        sum = evaluateSum(root.left, root) + evaluateSum(root.right, root);
    
    return sum;
};

var evaluateSum = function(parent, grandparent){
    let sum = 0;
    
    if(!parent)
        return sum;
    
    if(grandparent.val %2 == 0){
        if(parent.left)
            sum += parent.left.val
        if(parent.right)
            sum += parent.right.val
    }
    
    return sum + evaluateSum(parent.left, parent) + evaluateSum(parent.right, parent)
        
}