/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    return s!=null && (checkEquals(s,t) || isSubtree(s.left,t) || isSubtree(s.right, t));
};

var checkEquals = function(s, t){
    if(s == null && t == null){
        return true;
    }
    else if(s == null || t == null){
        return false;
    } else {
        return s.val==t.val && checkEquals(s.left, t.left) && checkEquals(s.right, t.right);
    }
}