/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const storedVals = {};
    let idx = 1;
    let tHead = head;
    let tLeft;
    while(idx <= right){
        if(idx >= left && idx <=  right){
            const i = getReversedIdx(idx);
            storedVals[i] = head.val;
        } else {
            storedVals[idx] = head.val;
        }
        head = head.next;
        idx++;
    }
    idx = 1;
    head = tHead;
    while(idx <= right){
        head.val = storedVals[idx];
        head = head.next;
        idx++;
    }
    function getReversedIdx(idx){
        return (right - idx) + left;
    }
    return tHead;
};