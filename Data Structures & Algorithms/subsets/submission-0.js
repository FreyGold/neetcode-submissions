class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [[]]
        for(let num of nums){
            let length = res.length
            for(let i = 0; i<length; i++){
                res.push([...res[i], num])
            }
        }
        return res
    }
}
