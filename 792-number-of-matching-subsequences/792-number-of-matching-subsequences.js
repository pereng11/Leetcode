/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let result = 0;
    const visited = {};
    
    function checkSubs(word){
        if(word.length > s.length) return false;
        if(visited[word] !== undefined) return visited[word];
        let idxS = -1;
        for(let i = 0; i < word.length; i++){
            idxS = s.indexOf(word[i], idxS+1);
            if(idxS < 0) break;
        }
        if(idxS >= 0){
            visited[word] = true;
            return true;
        } else{
            visited[word] = false;
            return false;
        }
    }
    
    words.forEach(word => {
        if(checkSubs(word)) result++;
    });
    return result;
};