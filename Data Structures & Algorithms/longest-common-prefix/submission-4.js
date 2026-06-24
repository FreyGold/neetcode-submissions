class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
      let res = "";
      for (let i = 0; i<strs[0].length; i++)
     { 
        let cur = strs[0][i]
        let isMatch = true
        for (let word of strs){
                if (cur != word[i]){
                    isMatch = false
                }
            }
        console.log(cur, isMatch, res)
       if(isMatch){
           res += strs[0][i]
        }else{
            return res
        }
       } 
       return res
    }

}
