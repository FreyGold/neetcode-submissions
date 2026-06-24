class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {}
        let res = 0;
        let l = 0, maxf=0;
        
        for(let r=0; r<s.length; r++){

            map[s[r]] = (map[s[r]] || 0) + 1;
            maxf=Math.max(maxf, map[s[r]])
            while((r-l+1) - maxf>k){
                map[s[l]]-=1
                l+=1
            }
            res = Math.max(res, r-l+1)
        }
        return res
    }
}
