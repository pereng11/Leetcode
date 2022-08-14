function removeElement(nums: number[], val: number): number{
    let i = 0;
    while(i < nums.length){
        nums[i] === val ? nums.splice(i, 1) : i++;
    }
    return nums.length;
};