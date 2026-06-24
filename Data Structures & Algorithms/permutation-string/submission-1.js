class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l=0, r=l+s1.length
        let str1 = s1.split("").sort()
        let res = false;
        while(r<=s2.length){
            let str2 = s2.slice(l, r).split("").sort()
            console.log("string1: ", str1, "string2: ", str2, "iteration: ", l)
            if(str1.join("")==str2.join("")){
                res = true
            }
            l+=1;
            r+=1;

        }
        return res
    }
}
