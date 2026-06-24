class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []
        const snum = nums.sort((a, b) => a - b);
        console.log(snum)
        let l = 0
        while(l <= snum.length-3){
            let r = l+1, e = snum.length - 1
            while(r < e){
                let total = snum[l] + snum[r] + snum[e]
                // console.log(total)
                if(total > 0){
                    e--
                }
                else if(total < 0){
                    r++
                } else {
                    let final = [ snum[l] , snum[r] , snum[e]]
                    res.push(final)
                    e--
                    r++
                    while (r < e && snum[r] === snum[r - 1]) r++; // Skip duplicate r
    while (r < e && snum[e] === snum[e + 1]) e--; // Skip duplicate e
                }
            }
            l++
            while(snum[l] == snum[l-1]){
                l++
            }
        }
        return res
    }
}
