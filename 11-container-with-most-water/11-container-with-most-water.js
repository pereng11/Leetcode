/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let l = 0;
    let r = height.length-1;
    function getArea(l, r){
        const h = Math.min(height[l], height[r]);
        return h * (r - l);
    }
    while(l < r){
        const area = getArea(l, r);
        max = Math.max(max, area);
        if(height[l] < height[r]){
            l++;
        } else {
            r--;
        }
    }
    return max;
};