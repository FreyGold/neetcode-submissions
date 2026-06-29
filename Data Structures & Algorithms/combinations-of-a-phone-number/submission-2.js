class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let map = {
            "2": ["a","b","c"],
            "3": ["d","e","f"],
            "4": ["g","h","i"],
            "5": ["j","k","l"],
            "6": ["m","n","o"],
            "7": ["p","q","r","s"],
            "8": ["t","u","v"],
            "9": ["w","x","y","z"]
        }

        let current = [];
        let result = [];

        function backtrack(index, key){
             if(digits.length === 0){
                return;
            }
            if(current.length === digits.length){
                result.push(current.join(""));
                return;
            }
            for(let i = 0; i<map[key].length; i++){
                current.push(map[key][i]);
                backtrack(index+1, digits[index+1]);
                current.pop();
            }
        }
        backtrack(0, digits[0])
        return result
    }
}
