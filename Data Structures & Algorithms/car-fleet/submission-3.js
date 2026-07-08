class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = []
        for(let i = 0; i < position.length; i++){
            cars.push([position[i], (target-position[i]) / speed[i]])
        }
        let fleets = 0;
        cars.sort((a, b)=>b[0]-a[0])
        console.log(cars)
        let biggestTime = 0;
        for(let [pos, t] of cars){
           if(t > biggestTime){
            fleets++;
            biggestTime = t;
           }
        }
        return fleets
        
    }
}
