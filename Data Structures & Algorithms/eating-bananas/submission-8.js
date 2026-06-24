class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        
        if(h==piles.length){
            return Math.max(...piles)
        }
        let l=1, r = Math.max(...piles)
        let res = r
        while(l <= r){
            let mid = Math.floor((l+r)/2)
            let predictedHours = 0
            for(const pile of piles){
                predictedHours += Math.ceil(pile/mid)
            }
            if(predictedHours<=h){
                res = mid
                r = mid-1
            }else if (predictedHours>h){
                l = mid+1
            }

        }
        return res
    }
}
