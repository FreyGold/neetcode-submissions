class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    
    minEatingSpeed(piles, h) {
        let l = 1, r = Math.max(...piles)
        let mid = l + Math.floor((r-l)/2)
        
        let res = r;
        while(r >= l){
            mid = l + Math.floor((r-l)/2)
            console.log(mid)
            
            let predictedHours = 0;
            for(const pile of piles){
               predictedHours+=Math.ceil(pile/mid)
            }
            if(predictedHours>h){
                console.log(predictedHours, ">")
                l = mid+1;
            }
            else if(predictedHours<=h){
                console.log(predictedHours,"<")
                res=mid
                r=mid-1;
            }
            // 1, 2, 3, 4, 5
        }
        return res
    }
}
