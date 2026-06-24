class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map={}
        let res = []
        strs.forEach(string => {
            const sortedStr = string.split("").sort().join("");
            if(!map[sortedStr]){
                map[sortedStr] = [string]
            }
            else{
                map[sortedStr].push(string)
            }
        })
        Object.entries(map).forEach(entry => {
            let array = entry[1];
            res.push(array)
        })
        return res
    
    }
}
