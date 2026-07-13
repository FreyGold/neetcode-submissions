class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = []
        let cur = []
        function traverse(start){
            if(cur.length == k){
                res.push([...cur]);
                return;
            }
            for(let i = start; i<=n; i++){
                cur.push(i)
                traverse(i+1)
                cur.pop();
            }
        }
        traverse(1)
        return res
    }
}
