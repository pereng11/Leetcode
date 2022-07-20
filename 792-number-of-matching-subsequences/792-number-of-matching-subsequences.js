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
        
        let idxS = 0;
        let idxW = 0;
        let currS = s[idxS];
        let currW = word[idxW];
        while(idxS < s.length && idxW < word.length){
            if(currS === currW){
                currW = word[++idxW];
            } 
            currS = s[++idxS];
        }
        if(!currW){
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