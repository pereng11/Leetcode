/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const table = new Map();
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i];
        if(table.get(curr)) table.set(curr, 0);
        else table.set(curr, 1);
    }
    for([key, val] of table){
        if(val === 1) return key;
    }
};