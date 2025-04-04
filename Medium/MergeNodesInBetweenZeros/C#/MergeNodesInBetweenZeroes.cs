/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeNodes(ListNode head) {
        ListNode mergedList = new ListNode();
        ListNode mergedRef = mergedList;
        int accumulator = 0;

        while(head != null){
            if(head.val != 0){
                accumulator += head.val;
            }
            else if(head.val == 0 && accumulator != 0) {
                mergedList.val = accumulator;
                accumulator = 0;
                if(head.next != null){
                    mergedList.next = new ListNode();
                    mergedList = mergedList.next;
                }
            }
            head = head.next;
        }

        return mergedRef;
    }
}