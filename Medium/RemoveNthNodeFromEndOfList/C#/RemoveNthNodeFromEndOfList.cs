/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var countFromEnd  = 0;

var removeNthFromEnd = function(head, n) {
    var length = 0;
    var curr = head;
    
    for(curr; curr != null; curr = curr.next){
        length++;
    }
    
    var nthFromEnd = length - n;
    curr = head;
    if(nthFromEnd == 0){
        return head.next || null;
    }
    
    for(var j = 0; j < length; j++){
        if(j == nthFromEnd-1){
            curr.next = curr.next.next || null;
            break;
        }
        curr = curr.next;
    }
    return head
};


