/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

var getAllElements = function(root1, root2) {
    
    let list = [];
    
    addToList(root1, list);
    addToList(root2, list);
    
    console.log(list)
    
    return list.sort((a,b) => a-b);
   
};

var addToList = function(node, list){
    if(node != null){
        addToList(node.left, list);
        list.push(node.val);
        addToList(node.right, list);
    }
}