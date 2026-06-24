class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    middle(min, max){
        console.log(min, max, ",,,,")
        return Math.floor((max + min) / 2)
    }
    search(nums, target) {
        let min = 0, max = nums.length - 1
        var i = this.middle(min, max)
       while(min <= max){

            console.log(min, max)
        if (target < nums[i]){
            console.log(i,"-----")
           max = i - 1
           i = this.middle(min, max)
        }else if (target > nums[i]){
            console.log(i,"/////")
            min = i + 1
            i = this.middle(min, max)
        }else if (target == nums[i]){
            console.log(i, "555555555")
            return i
        }else{
            return -1
        }
        
        }
        return -1
    }
}
