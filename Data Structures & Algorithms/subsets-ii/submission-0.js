class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
         let res = [[]]
        for(let num of nums){
            let length = res.length
            for(let i = 0; i<length; i++){
                let cur = [...res[i], num].sort().toString()
                let isValid = true
                for(let arr of res){
                    if (cur == arr.sort().toString()){
                        isValid=false
                    }
                }
                if(isValid){
                    res.push([...res[i], num])
                }
            }
        }
        return res
    }
}
