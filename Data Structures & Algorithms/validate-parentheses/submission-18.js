class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let map = {
            ')': "(", '}': "{", ']':"[" 
        }
        for (let r of s){

        if (['(', '{', '['].includes(r)){
            stack.push(r)
            console.log(stack, 1)
        }else{
            if (stack.length == 0){
                return false
            }
            if (map[r] == stack.at(-1)){
                stack.pop()
            }else{return false}
        }
        }
        return stack.length == 0
    }
}
