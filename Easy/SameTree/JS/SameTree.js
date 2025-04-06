/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    let queue = [];
    let queue2 = [];
    queue.push(p);
    queue2.push(q);
    
    while(queue.length > 0){
        let curr = queue.shift();
        let curr2 = queue2.shift();
        
        if(!curr && !curr2){
            continue;
        }
        else if(!curr || !curr2){ // 1 is null and the other is not
            return false;
        }
        else if (curr.val != curr2.val){
            return false;
        }
        
        queue.push(curr.left);
        queue2.push(curr2.left);
        
        queue.push(curr.right);
        queue2.push(curr2.right);
    }
        return true
};