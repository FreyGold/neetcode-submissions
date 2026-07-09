class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let n = nums2.length
        let res = []
        for(let num of nums1){
            let start = nums2.indexOf(num);
            let found = false;
            for(let i = start; i<n;i++){
                if(nums2[i] > num){
                    res.push(nums2[i])
                    found = true;
                    break;
                }
            }
            if(!found){
                res.push(-1)
            }
        }
        return res
    }
}
