class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        for (let op of operations){
            if(op == "+"){
                stack.push(stack.at(-1)+ stack.at(-2))
            }
            else if(op == "D"){
                let temp = Number(stack.at(-1)*2)
                stack.push(temp)
            
            }
            else if(op == "C"){
                stack.pop()
            }else{
                stack.push(Number(op))
            }
        }
        console.log(stack)
    return stack.reduce((acc, cur)=>{ return acc + cur }, 0)
    }
}
