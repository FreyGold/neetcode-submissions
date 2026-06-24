class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let minRow = 0, maxRow = matrix.length -1
        if(minRow==maxRow){
            if (matrix[minRow].includes(target)){
                return true
            }else {
                return false
            }
        }
        while(minRow<=maxRow){
        
        if(minRow == maxRow){
            if (matrix[minRow].includes(target)){
                return true
            }else {
                return false
            }
        }
        else if(target > matrix[minRow][matrix[minRow].length - 1]){
            minRow+=1
        }else if (target < matrix[maxRow][0]){
            maxRow-=1
        }

        }
    }
}
