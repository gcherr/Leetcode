/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let list = [];
    let ptr = head;
    let count = 0;

    while(ptr != null){
        count++;
        list.push(ptr.val);
        ptr = ptr.next;
    }

    for(let i = 0; i < Math.floor(count/2); i++){
        if(list[i] != list[list.length-1-i]){
            return false;
        }
    }

    return true;
};