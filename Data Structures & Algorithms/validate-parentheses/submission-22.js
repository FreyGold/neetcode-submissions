class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length <= 1){
            return false
        }
        const map = {
            ")": "(",
            "}":"{",
            "]": "["
        }
        let stack = []
        for (const c of s){
            if (['(', '{', '['].includes(c)){
                stack.push(c)
            }else if(stack.length > 0 &&stack[stack.length - 1] == map[c]){
                stack.pop()
            }else{
                return false
            }
        }
        return stack.length == 0
    }
}
