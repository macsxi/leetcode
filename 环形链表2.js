/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head, slow = head;
    while (fast && slow) {
        fast = fast.next && fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return slow;
        }
    }
    return null;
};