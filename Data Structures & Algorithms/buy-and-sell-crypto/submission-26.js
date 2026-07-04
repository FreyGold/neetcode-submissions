class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = prices[0], maxProfit=0;
        for(let price of prices){
            if(lowest>price){
                lowest = price
            }else{
                let cur = price - lowest;
                maxProfit = Math.max(maxProfit, cur)
            }
            console.log(lowest, maxProfit, price)
        }
        return maxProfit
    }
}
