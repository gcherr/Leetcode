/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    var map = new Map();
    while(headA != null){
        map.set(headA, true);
        headA = headA.next;
    }
    
    while(headB != null){
        if(map.has(headB))
            return headB;
        headB = headB.next;
    }
    return null;

};