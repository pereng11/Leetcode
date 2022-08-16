function lengthOfLongestSubstring(s: string): number {
    const N = s.length;
    const visited = {};

    let leftIdx = 0;
    let rightIdx = 0;
    let maxLen = 0;


    function checkTwice (l, r)
    {
      if ( l === r ) return false;
      const rightVal = s[ rightIdx ];
      return visited[ rightVal ];
    }

    function controlPointer ()
    {
        const isTwice = checkTwice(leftIdx, rightIdx);
      if ( isTwice )
      {
        const leftVal = s[ leftIdx ];
        visited[ leftVal ] = false;
        leftIdx += 1;
      } else
      {
        const rightVal = s[rightIdx];
        visited[ rightVal ] = true;
        updateMaxVal(leftIdx, rightIdx);
        rightIdx += 1;
      }
    }
    function updateMaxVal ( l, r )
    {
      maxLen = Math.max( maxLen, rightIdx - leftIdx + 1 );
    }

    while ( rightIdx < N )
    {
      controlPointer();
    }

    return maxLen;
};