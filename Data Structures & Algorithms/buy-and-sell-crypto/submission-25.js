class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(p) {
        let [l, r] = [0,1]
        let maxP = 0
        while(r <= p.length - 1 ){
            if(p[r] > p[l]){
                maxP = Math.max(maxP, p[r]-p[l])
                r++
            }else{
                l=r
                r++
            }
        }
        return maxP
    }
}
