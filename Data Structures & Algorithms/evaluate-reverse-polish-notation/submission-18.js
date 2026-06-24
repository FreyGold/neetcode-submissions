class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const ops = ['+', '-', '/', '*']
        const s = []
        for(const t of tokens){
            if (ops.includes(t)){
                let b = Number(s.pop())
                let a = Number(s.pop())
                if(t == "+"){s.push(a+b)}
                else if(t == "-"){s.push(a-b)}
                else if(t == "/"){s.push(Math.trunc(a/b))}
                else if(t == "*"){s.push(a*b)}
            }else{
                s.push(t)
            }
        }
        return s[0]
    }
}
