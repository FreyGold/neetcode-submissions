class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = {}
        let mostFreqCount = 0;
        let mostFreq
        for (let num of nums){
            if (!map[num]){
                map[num] = 1
            }
            else {
                map[num]+=1
            }
        }
        for (let [num, freq] of Object.entries(map)){
            if(mostFreqCount < freq){
                mostFreqCount = freq
                mostFreq = num
            } 
        }
        return mostFreq
    }
}
