/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(x < -100 || x > 100 || head === null) return head;
    
    let beforeHead = new ListNode();
    let afterHead = new ListNode();
    let before = beforeHead;
    let after = afterHead;
    
    while(head){
        const val = head.val;
        const newNode = new ListNode(val);
        if(val < x){
            beforeHead.next = newNode;
            beforeHead = beforeHead.next;
        }else{
            afterHead.next = newNode;
            afterHead = afterHead.next;
        }
        head = head.next;
    }
    beforeHead.next = after.next;
    const newHead = before.next;
    return newHead;
};