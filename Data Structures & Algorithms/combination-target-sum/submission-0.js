class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const current = [];

        function backtrack(startIndex, remaining) {
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            if (remaining < 0) {
                return;
            }

            for(let i = startIndex; i<nums.length; i++){
                current.push(nums[i])
                backtrack(i, remaining - nums[i])
                current.pop()
            }
        }
        backtrack(0, target);
        return result
    }
}
