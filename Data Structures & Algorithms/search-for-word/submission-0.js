class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length, cols = board[0].length;
        let visited = Array.from({length: rows}, ()=>{
            return Array.from({length:cols}, ()=>false)
        })
        let exists=false;
        function dfs(row, col, index){
            if(row<0 || col < 0 || row >= rows || col >= cols) return;
            if (visited[row][col]) return;
            visited[row][col] = true;
            if(board[row][col] == word[index]){
                index++;
            }else{
                visited[row][col]=false;
                return;
            }
            if(index == word.length){
                exists = true;
                return;
            }
            visited[row][col] = true;
            dfs(row + 1, col, index)
            dfs(row - 1, col, index)
            dfs(row, col + 1, index)
            dfs(row, col - 1, index)
            visited[row][col] = false;
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, 0)
            }
        }
        return exists
    }
}
