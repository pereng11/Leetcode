/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    if(len <= 1) return s.length;
    
    let max = 1;
    let currLen = 1;
    let leftIdx = 0, rightIdx = 1;
    let leftVal = s[0], rightVal = s[1];
    const visit = {[s[0]]: true};
    while(leftIdx < len && rightIdx < len){
        if(visit[rightVal]){
            visit[leftVal] = false;
            leftVal = s[++leftIdx];
            currLen--;
        } else {
            visit[rightVal] = true;
            rightVal = s[++rightIdx];
            currLen++;
            max = Math.max(max, currLen);
        }
    }
    return max;
};