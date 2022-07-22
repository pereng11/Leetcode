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
    
    const lessVals = [];
    const greaterVals = [];
    while(head){
        const val = head.val;
        if(val < x){
            lessVals.push(val);
        }else{
            greaterVals.push(val);
        }
        head = head.next;
    }
    const newSeq = lessVals.concat(greaterVals);
    let tempHead = new ListNode(newSeq[0]);
    const newHead = tempHead;
    for(let i = 1; i < newSeq.length; i++){
        let val = newSeq[i];
        let newNode = new ListNode(val);
        tempHead.next = newNode;
        tempHead = tempHead.next;
    }
    
    return newHead;
};