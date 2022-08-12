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
        // curr의 값이 닫는 괄호이면 parentheses에 키로 접근했을 때 값이 존재
        // parentheses[curr] = '{' || '(' || '['
        if(parentheses[curr]){
            // 짝이 맞으면 pop();
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



