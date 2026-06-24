class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l=0, r = numbers.length - 1;
        while(l<r){
            let k = numbers[r] + numbers[l]
            if (k < target){
                l++
            }else if(k > target){
                r--
            }
            else{
                return [l+1,r+1]
            }
        }
    }
}
