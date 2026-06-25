class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [];
        let current = [];
        let used = new Array(nums.length).fill(false)
        function backtrack(used){
            if(current.length == nums.length){
                perms.push([...current]);
                return;
            }
            for(let i=0; i<nums.length; i++){
                if(used[i]) continue;
                used[i] = true
                current.push(nums[i]);
                backtrack(used);
                current.pop()
                used[i] = false
            }
        }
        backtrack(used)
        return perms;
    }
}
