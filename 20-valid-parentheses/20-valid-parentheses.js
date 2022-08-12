/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parentheses = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        const curr = s[i];
        if(parentheses[curr]){
            if(parentheses[curr] === stack[stack.length-1]){
                stack.pop();
            }else {
                return false;
            }
        } else {
            stack.push(curr);
        }
    }
    return stack.length ? false : true;
};