class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = []
        let current = []
        function checkPal(pal){
            if(pal === pal.split("").reverse().join("")){
                return true
            }
        }
        function backtrack(start){
            if(start === s.length){
                result.push([...current])
                return;
            }
            for(let i = start; i<s.length; i++){
                let pal = s.slice(start, i+1);
                if(!checkPal(pal)) continue;
                current.push(pal)
                backtrack(i + 1)
                current.pop()
            }
            
        }
        backtrack(0)
        return result
    }
}
