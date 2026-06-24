class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length, cols = matrix[0].length
        let left = 0, right = rows * cols - 1
        while(left <= right){
            let mid = Math.floor((right + left) / 2)
            let val = matrix[Math.floor(mid/cols)][mid%cols]
            if(target == val){
                return true
            }else {

            if(target > val){
                left = mid+1
            }else{
                right = mid-1
            }
            }
        }
        return false
    }
}
