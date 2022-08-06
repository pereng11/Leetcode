/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const numTable = {};
    for(let i = 0; i < 10; i++){
        numTable[i] = true;
    }
    
    s = s.trimStart();
    
    let i = 0;
    let result = '0';
    let isNegative = false;
    if(s[0] === '-' || s[0] === '+'){
        if(s[0] === '-') {
            isNegative = true;
        }
        i++;
    }
    while(i < s.length && numTable[s[i]]){
        result += s[i];
        i++;
    }
    const val = parseInt(result, 10);
    if(val >= 2**31){
        return isNegative ? 2**31 * -1 : 2**31 -1;
    }
    return isNegative ? val * -1 : val;
};