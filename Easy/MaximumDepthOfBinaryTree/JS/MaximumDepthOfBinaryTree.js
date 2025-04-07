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
var maxDepth = function(root) {
    if(root == null)
        return 0;
    
    let leftDepth = 0;
    let rightDepth = 0;
    
    if(root.left != null)
        leftDepth = maxDepth(root.left)
    if(root.right != null)
        rightDepth = maxDepth(root.right)
    
    return leftDepth > rightDepth ? leftDepth+1 : rightDepth+1;
    
};