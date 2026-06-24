class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
     return strs.reduce((prefix, str)=>{
        while(!str.startsWith(prefix)){
           prefix = prefix.slice(0,-1)
        }
        return prefix
      }, strs[0])
    }

}
